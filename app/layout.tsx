import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Anan Travel | Your Pathway to Exploration',
 description: 'Personal travel planning from Addis Ababa. Flights, Umrah journeys, visa assistance, holidays and study abroad support. Visit Anan Travel at Garad Building, Welo Sefer.',
 applicationName: 'Anan Travel',
 openGraph: {title:'Anan Travel | Your Pathway to Exploration',description:'From Addis Ababa to a world of possibility. Travel thoughtfully, with someone who knows the way.',type:'website',locale:'en_ET'},
 robots: {index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
