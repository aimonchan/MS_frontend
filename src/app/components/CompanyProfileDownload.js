'use client';

import { useEffect, useState } from 'react';

const inputClass =
  'w-full p-3 rounded-[20px] bg-transparent border border-accent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent';

const CompanyProfileDownload = ({ className = '' }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ email: '', phone: '', website: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | sending | done | error

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    if (status.state === 'done') {
      setForm({ email: '', phone: '', website: '' });
      setStatus({ state: 'idle', message: '' });
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    try {
      const res = await fetch('/api/company-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Something went wrong.');
      setStatus({
        state: 'done',
        message: `We have sent the Company Profile to ${form.email}. Please check your inbox (and spam folder).`,
      });
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong.' });
    }
  };

  return (
    <>
      <button type="button" className={`btn ${className}`} onClick={() => setOpen(true)}>
        Download Company Profile
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-dialog-title"
        >
          <div
            className="relative w-full max-w-md rounded-[20px] border border-accent bg-black p-6 sm:p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-3 text-3xl leading-none text-gray-400 hover:text-white"
            >
              &times;
            </button>

            <h2 id="profile-dialog-title" className="text-2xl font-semibold">
              Download Company Profile
            </h2>

            {status.state === 'done' ? (
              <div className="mt-4">
                <p className="text-gray-300">{status.message}</p>
                <button type="button" onClick={close} className="btn mt-6 w-full">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <p className="text-gray-300 text-sm">
                  Enter your email and phone number and we will email you our Company Profile (PDF).
                </p>

                {/* Honeypot: hidden from people, bots tend to fill it */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  autoComplete="tel"
                  required
                  className={inputClass}
                />

                {status.state === 'error' && (
                  <p className="text-red-400 text-sm" role="alert">
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="btn w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === 'sending' ? 'Sending...' : 'Send me the Company Profile'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyProfileDownload;
