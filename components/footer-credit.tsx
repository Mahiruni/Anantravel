'use client';

import { ArrowUpRight } from 'lucide-react';

const whatsapp = 'https://wa.me/251924093037?text=Hello%20ANAN%20TRAVEL%2C%20I%20would%20like%20to%20chat%20with%20your%20team.';
const telegram = 'https://t.me/anantravelethiopia';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-brand-icon">
      <path fill="currentColor" d="M20.1 3.9A9.87 9.87 0 0 0 12.03 1C6.03 1 1.15 5.87 1.15 11.86c0 1.91.5 3.77 1.45 5.41L1.08 23l5.88-1.49a10.83 10.83 0 0 0 5.06 1.28h.01c5.99 0 10.87-4.87 10.87-10.86 0-2.9-1.13-5.63-2.8-8.03ZM12.03 20.73h-.01a8.84 8.84 0 0 1-4.5-1.23l-.32-.19-3.49.89.93-3.4-.21-.35a8.81 8.81 0 0 1-1.35-4.69c0-4.88 3.98-8.85 8.87-8.85 2.37 0 4.6.92 6.27 2.59a8.8 8.8 0 0 1 2.6 6.27c0 4.88-3.98 8.86-8.86 8.86Zm4.86-6.64c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.18-.52-.32Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-brand-icon">
      <path fill="currentColor" d="M21.67 3.36 18.56 20.1c-.23 1.18-.87 1.47-1.76.92l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.99.48l.35-4.95 9.01-8.14c.39-.35-.08-.54-.61-.2L6.2 13.9l-4.75-1.49c-1.03-.32-1.05-1.03.22-1.52L20.23 3.8c.86-.32 1.61.2 1.44-.44Z" />
    </svg>
  );
}

export default function FooterCredit() {
  return (
    <>
      <div className="footer-contact-dock" aria-label="ANAN TRAVEL quick chat">
        <a className="footer-contact-pill whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with ANAN TRAVEL on WhatsApp">
          <span className="footer-contact-icon-wrap"><WhatsAppIcon /></span>
          <span className="footer-contact-copy"><strong>WhatsApp</strong><small>Chat with us</small></span>
          <ArrowUpRight size={14} aria-hidden="true" className="footer-contact-arrow" />
        </a>
        <a className="footer-contact-pill telegram" href={telegram} target="_blank" rel="noopener noreferrer" aria-label="Chat with ANAN TRAVEL on Telegram @anantravelethiopia">
          <span className="footer-contact-icon-wrap"><TelegramIcon /></span>
          <span className="footer-contact-copy"><strong>Telegram</strong><small>@anantravelethiopia</small></span>
          <ArrowUpRight size={14} aria-hidden="true" className="footer-contact-arrow" />
        </a>
      </div>

      <div className="footer-bottom" aria-label="ANAN TRAVEL website credit">
        <div className="hisabtech-credit">
          <span>Website crafted by </span>
          <a href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">
            <strong>HisabTech</strong>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
