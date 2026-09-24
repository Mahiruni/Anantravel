import type { Metadata } from 'next';
import './globals.css';
import './brand-cleanup.css';
import './travel-hero.css';
import './ananbot.css';
import './hisabtech-credit.css';
import './site-refresh.css';
import './payoneer-refresh.css';
import './mobile-menu-fix.css';
import './logo-equal.css';
import './ph-globe-animation.css';
import FullPageTranslator from '../components/full-page-translator';
import AnanBot from '../components/anan-bot';
import FooterCredit from '../components/footer-credit';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import BackToTop from '../components/back-to-top';

const siteUrl = 'https://www.anantravelagency.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ANAN TRAVEL | Your Pathway to Exploration',
    template: '%s | ANAN TRAVEL',
  },
  description: 'ANAN TRAVEL — Your Pathway to Exploration. Travel planning from Addis Ababa, including flights, Umrah journeys, visa assistance, holidays and study abroad support.',
  applicationName: 'ANAN TRAVEL',
  keywords: ['ANAN TRAVEL', 'Anan Travel Ethiopia', 'travel agency Ethiopia', 'travel agency Addis Ababa', 'flight booking Ethiopia', 'Umrah Ethiopia', 'visa assistance Ethiopia', 'holiday packages Ethiopia', 'study abroad Ethiopia'],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ANAN TRAVEL | Your Pathway to Exploration',
    description: 'Your Pathway to Exploration — thoughtful travel planning from Addis Ababa to the world.',
    url: siteUrl,
    siteName: 'ANAN TRAVEL',
    type: 'website',
    locale: 'en_ET',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANAN TRAVEL | Your Pathway to Exploration',
    description: 'Travel planning from Addis Ababa to the world.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><FooterCredit /><BackToTop /><FullPageTranslator /><AnanBot /></body></html>;
}
