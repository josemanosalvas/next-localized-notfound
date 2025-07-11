import { createTranslator, Locale } from '@/lib/localization';
import { notFound } from 'next/navigation';

interface HomePageProps {
  params: {
    locale: string;
    slug?: string[];
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  if (!params.slug || params.slug.includes("not-found")) notFound()

  const t = createTranslator(locale);

  const message = t('welcomeMessage');

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}