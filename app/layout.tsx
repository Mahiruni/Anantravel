import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ANAN TRAVEL | Your Pathway to Exploration',
  description: 'ANAN TRAVEL — Your Pathway to Exploration. Personal travel planning from Addis Ababa, including flights, Umrah journeys, visa assistance, holidays and study abroad support.',
  applicationName: 'ANAN TRAVEL',
  openGraph: {
    title: 'ANAN TRAVEL | Your Pathway to Exploration',
    description: 'Your Pathway to Exploration — thoughtful travel planning from Addis Ababa to the world.',
    type: 'website',
    locale: 'en_ET',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
