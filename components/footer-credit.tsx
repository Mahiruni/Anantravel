'use client';

import { ArrowUpRight, Facebook, Instagram, Youtube, Linkedin, Music2 } from 'lucide-react';

const whatsapp = 'https://wa.me/251960555000?text=Hello%20ANAN%20TRAVEL%2C%20I%20would%20like%20to%20chat%20with%20your%20team.';
const telegram = 'https://t.me/anantravelethiopia';

const socials = [
  { name: 'Facebook', icon: Facebook },
  { name: 'Instagram', icon: Instagram },
  { name: 'TikTok', icon: Music2 },
  { name: 'YouTube', icon: Youtube },
  { name: 'LinkedIn', icon: Linkedin },
];

export default function FooterCredit() {
  return (
    <footer className="anan-site-footer">
      <div className="anan-footer-glow" aria-hidden="true" />
      <div className="anan-footer-inner">
        <div className="anan-footer-top">
          <div className="anan-footer-brand-block">
            <a className="anan-footer-brand" href="#home" aria-label="ANAN TRAVEL home">
              ANAN TRAVEL<span>✦</span>
            </a>
            <p>Your pathway to exploration.</p>
            <p className="anan-footer-description">Thoughtful travel planning from Addis Ababa to the world — flights, Umrah, visas, holidays and study abroad.</p>
          </div>

          <div className="anan-footer-column">
            <p className="anan-footer-label">EXPLORE</p>
            <a href="#services">Our services <ArrowUpRight size={14} /></a>
            <a href="#packages">Experiences <ArrowUpRight size={14} /></a>
            <a href="#about">About us <ArrowUpRight size={14} /></a>
            <a href="#faq">Help & FAQ <ArrowUpRight size={14} /></a>
          </div>

          <div className="anan-footer-column">
            <p className="anan-footer-label">CONTACT</p>
            <a href="tel:+251960555000">+251 960 555 000</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
            <a href={telegram} target="_blank" rel="noopener noreferrer">Telegram <ArrowUpRight size={14} /></a>
            <a href="mailto:info@anantravel.com">info@anantravel.com</a>
          </div>

          <div className="anan-footer-column anan-footer-address">
            <p className="anan-footer-label">VISIT</p>
            <p>Garad Building<br />Welo Sefer, Addis Ababa<br />Ethiopia</p>
            <p>Mon–Fri · 8:30 AM–6:00 PM<br />Sat · 9:00 AM–3:00 PM</p>
          </div>
        </div>

        <div className="anan-footer-social-row">
          <div>
            <p className="anan-footer-label">FOLLOW ANAN TRAVEL</p>
            <span className="anan-footer-social-note">Our main social channels</span>
          </div>
          <div className="anan-footer-socials" aria-label="ANAN TRAVEL social media">
            {socials.map(({ name, icon: Icon }) => (
              <span key={name} className="anan-footer-social" title={`${name} — account link to be connected`} aria-label={`${name} social media account`}> 
                <Icon size={17} />
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="anan-footer-bottom">
          <span>© {new Date().getFullYear()} ANAN TRAVEL. All rights reserved.</span>
          <span className="anan-footer-credit">Website crafted by <a href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">HisabTech <ArrowUpRight size={12} /></a></span>
        </div>
      </div>
    </footer>
  );
}
