import Image from 'next/image';
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

export default function SiteFooter() {
  return <>
    <div className="anan-contact-fabs" aria-label="Contact ANAN TRAVEL">
      <a className="anan-contact-fab anan-contact-call" href="tel:+251960555000" aria-label="Call ANAN TRAVEL" title="Call ANAN TRAVEL"><Phone size={20}/></a>
      <a className="anan-contact-fab anan-contact-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ANAN TRAVEL" title="WhatsApp ANAN TRAVEL"><Image src="/images/whatsapp-official.svg" alt="" width={25} height={29} /></a>
      <a className="anan-contact-fab anan-contact-telegram" href="https://t.me/anantravelethiopia" target="_blank" rel="noopener noreferrer" aria-label="Telegram ANAN TRAVEL" title="Telegram ANAN TRAVEL"><Send size={19}/></a>
    </div>
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo" aria-label="ANAN TRAVEL home">
              <Image className="site-footer-logo-mark" src="/images/anan-travel-logo.svg" alt="" width={62} height={30} />
              <span className="site-footer-wordmark">ANAN TRAVEL</span>
            </Link>
            <p>Your pathway to exploration.</p><p>Thoughtful travel planning from Addis Ababa to the world.</p>
          </div>
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
