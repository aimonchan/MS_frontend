import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  // Fail fast instead of hanging if the SMTP server is unreachable.
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 60000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const EMAIL_RE = /^[^\s@<>",;]+@[^\s@<>",;]+\.[^\s@<>",;]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s\-()]{5,19}$/;

// Best-effort per-IP limit (in-memory, so it resets on cold starts).
// It stops casual abuse of the mailer, not a determined attacker.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map();

const tooMany = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
};

export async function POST(request) {
  try {
    const data = await request.json();
    const email = String(data.email ?? '').trim();
    const phone = String(data.phone ?? '').trim();

    // Honeypot: real visitors never fill this hidden field. Pretend success.
    if (data.website) {
      return NextResponse.json({ message: 'Check your inbox.' }, { status: 200 });
    }

    if (!email || !phone) {
      return NextResponse.json({ message: 'Email and phone number are required.' }, { status: 400 });
    }
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!PHONE_RE.test(phone)) {
      return NextResponse.json({ message: 'Please enter a valid phone number.' }, { status: 400 });
    }

    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    if (tooMany(ip)) {
      return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const pdf = await readFile(
      path.join(process.cwd(), 'private', 'ModernSpace_Company_Profile.pdf')
    );

    // 1) Lead notification first, so the lead is captured even if delivery fails.
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      replyTo: email,
      subject: 'Company Profile download request',
      html: `
        <p>Someone requested the Company Profile from the website:</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      `,
    });

    // 2) Send the PDF to the visitor.
    await transporter.sendMail({
      from: `"Modern Space" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Modern Space Company Profile',
      html: `
        <p>Thank you for your interest in Modern Space Furnishing and Decoration.</p>
        <p>Our Company Profile is attached to this email.</p>
        <p>If you would like to discuss a project, just reply to this email or visit
        <a href="https://www.mspace-deco.com">www.mspace-deco.com</a>.</p>
        <p>Modern Space Furnishing and Decoration Co., Ltd.</p>
      `,
      attachments: [
        {
          filename: 'ModernSpace_Company_Profile.pdf',
          content: pdf,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'Check your inbox.' }, { status: 200 });
  } catch (error) {
    console.error('Company profile request failed:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
