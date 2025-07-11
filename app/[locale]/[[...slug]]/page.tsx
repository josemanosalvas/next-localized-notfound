import { notFound } from 'next/navigation';
import { translate } from '@/app/actions';

interface HomePageProps {
  params: {
    locale: string;
    slug?: string[];
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  if (!params.slug || params.slug.includes("not-found")) notFound()

  const message = await translate(locale, 'welcomeMessage')

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );

}