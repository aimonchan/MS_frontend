import { notFound } from 'next/navigation';
import ChairDetail from '@/app/components/CustomCreations/ChairDetail';
import { chairsData, getChairById } from '@/lib/ChairData';
import { pageMetadata } from '@/lib/seo';

// Pre-render every item at build time so metadata is in the server HTML <head>.
export function generateStaticParams() {
  return chairsData.map((item) => ({ chairId: String(item.id) }));
}

// noindex until the catalogue has real products (current data is placeholder content).
export async function generateMetadata({ params }) {
  const { chairId } = await params;
  const chair = getChairById(chairId);
  if (!chair) return {};
  return pageMetadata({
    title: chair.title,
    description: `${chair.title}: custom-made furniture designed and built by Modern Space in Yangon.`,
    path: `/custom-creations/${chair.id}`,
    noindex: true,
  });
}

export default async function ChairDetailPage({ params }) {
  const { chairId } = await params;
  if (!getChairById(chairId)) {
    notFound();
  }
  return <ChairDetail chairId={chairId} />;
}
