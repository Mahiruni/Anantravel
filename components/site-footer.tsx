import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Music2, Youtube, Phone, Send } from 'lucide-react';

const whatsapp = 'https://wa.me/251960555000?text=Hello%20ANAN%20TRAVEL%2C%20I%20would%20like%20to%20chat%20with%20your%20team.';
const socials = [
  { Icon: Facebook, name: 'Facebook' },
  { Icon: Instagram, name: 'Instagram' },
  { Icon: Music2, name: 'TikTok' },
  { Icon: Youtube, name: 'YouTube' },
  { Icon: Linkedin, name: 'LinkedIn' },
];

function WhatsAppOfficialIcon() {
  return <svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M380.9 97.1C339-4.9 224.1-37.4 126.5 12.4 28.9 62.1-14.9 177.9 34.4 277.7L0 384l109.2-33.8c30.1 16.5 64 25.2 98.5 25.2h.1c113.8 0 206.2-92.4 206.2-206.2 0-55.1-21.5-106.9-33.1-72.1zM207.8 338.4c-30.7 0-60.8-8.2-87-23.8l-6.2-3.7-64.8 20.1 21.2-63.2-4-6.5c-16.8-27.4-25.6-59.1-25.6-91.7 0-95.1 77.4-172.5 172.6-172.5 46.1 0 89.4 18 121.9 50.5 32.5 32.5 50.4 75.8 50.4 121.9-.1 95.2-77.5 172.6-178.5 172.6zm94.7-129.5c-5.2-2.6-30.8-15.2-35.6-16.9-4.8-1.8-8.2-2.6-11.7 2.6-3.5 5.2-13.4 16.9-16.4 20.3-3 3.5-6 3.9-11.2 1.3-5.2-2.6-21.8-8-41.5-25.5-15.3-13.6-25.6-30.4-28.6-35.6-3-5.2-.3-8 2.3-10.6 2.3-2.3 5.2-6 7.8-9.1 2.6-3 3.5-5.2 5.2-8.7 1.7-3.5.9-6.5-.4-9.1-1.3-2.6-11.7-28.2-16.1-38.7-4.2-10.2-8.5-8.8-11.7-9-3-.2-6.5-.2-10-.2s-9.1 1.3-13.8 6.5c-4.8 5.2-18.2 17.8-18.2 43.4 0 25.6 18.6 50.3 21.2 53.8 2.6 3.5 36.6 55.9 88.7 78.4 12.4 5.4 22.1 8.6 29.7 11 12.5 4 23.9 3.4 32.9 2.1 10-1.5 30.8-12.6 35.1-24.7 4.3-12.1 4.3-22.5 3-24.7-1.3-2.2-4.8-3.5-10-6.1z"/></svg>;

export default function SiteFooter() {
  return <>
    <div className="anan-contact-fabs" aria-label="Contact ANAN TRAVEL">
      <a className="anan-contact-fab anan-contact-call" href="tel:+251960555000" aria-label="Call ANAN TRAVEL" title="Call ANAN TRAVEL"><Phone size={20}/></a>
      <a className="anan-contact-fab anan-contact-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ANAN TRAVEL" title="WhatsApp ANAN TRAVEL"><WhatsAppOfficialIcon /></a>
      <a className="anan-contact-fab anan-contact-telegram" href="https://t.me/anantravelethiopia" target="_blank" rel="noopener noreferrer" aria-label="Telegram ANAN TRAVEL" title="Telegram ANAN TRAVEL"><Send size={19}/></a>
    </div>
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand"><Link href="/">ANAN TRAVEL<span>✦</span></Link><p>Your pathway to exploration.</p><p>Thoughtful travel planning from Addis Ababa to the world.</p></div>
          <div><b>EXPLORE</b><Link href="/services">Services</Link><Link href="/destinations">Destinations</Link><Link href="/about">About us</Link><Link href="/faq">FAQ</Link></div>
          <div><b>CONTACT</b><a href="tel:+251960555000">+251 960 555 000</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:info@anantravel.com">info@anantravel.com</a><span>Garad Mall, Ground Floor<br/>Addis Ababa, Ethiopia</span></div>
          <div><b>START A JOURNEY</b><p>Tell us where you want to go. We will take care of the details.</p><Link className="footer-cta" href="/contact">Plan your journey <ArrowUpRight size={17}/></Link></div>
        </div>
        <div className="site-social-row"><span>FOLLOW ANAN TRAVEL</span><div>{socials.map(({Icon,name})=><a key={name} href="#" aria-label={name} title={name}><Icon size={18}/></a>)}</div></div>
        <div className="site-footer-bottom"><span>© {new Date().getFullYear()} ANAN TRAVEL. All rights reserved.</span><span>Website crafted by <a href="https://hisabtechnologies.com" target="_blank" rel="noreferrer">HisabTech <ArrowUpRight size={11}/></a></span></div>
      </div>
    </footer>
  </>;
}
