'use client';

import { ArrowUpRight, Send } from 'lucide-react';

const whatsapp = 'https://wa.me/251924093037?text=Hello%20ANAN%20TRAVEL%2C%20I%20would%20like%20to%20chat%20with%20your%20team.';
const telegram = 'https://t.me/anantravelethiopia';

export default function FooterCredit() {
  return (
    <div className="footer-utility">
      <div className="footer-contact-links" aria-label="Chat with ANAN TRAVEL">
        <a className="footer-chat whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">
          <span className="chat-dot" aria-hidden="true">◉</span>
          WhatsApp
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <a className="footer-chat telegram" href={telegram} target="_blank" rel="noopener noreferrer">
          <Send size={14} aria-hidden="true" />
          Telegram
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
      <div className="hisabtech-credit" aria-label="Website credit">
        <span>Website crafted by</span>
        <a href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">
          HisabTech
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
