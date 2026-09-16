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
    <>
      <style>{`
        .footer{display:none!important}
        .footer-contact-dock,.footer-bottom{display:none!important}
        .anan-site-footer{position:relative!important;overflow:hidden!important;background:#0e2922!important;color:#e9eee9!important;padding:92px 0 24px!important;margin-top:0!important;border-top:1px solid rgba(255,255,255,.08)!important;isolation:isolate!important}
        .anan-footer-glow{position:absolute;width:520px;height:520px;right:-180px;top:-260px;border-radius:50%;background:radial-gradient(circle,rgba(132,168,143,.22),transparent 68%);pointer-events:none;z-index:-1}
        .anan-footer-inner{width:min(1240px,calc(100% - 96px));margin:0 auto}
        .anan-footer-top{display:grid;grid-template-columns:1.55fr .85fr .95fr 1fr;gap:56px;padding-bottom:70px}
        .anan-footer-brand{display:inline-flex!important;align-items:flex-start;font-family:Manrope,sans-serif!important;font-size:clamp(32px,4vw,52px)!important;font-weight:800!important;letter-spacing:-.065em;line-height:.9;color:#f5f6f2!important}
        .anan-footer-brand span{color:#d6bd86;font-size:22px;margin-left:7px;line-height:1}
        .anan-footer-brand-block>p{color:#b8c7bf!important;font-size:13px!important;margin:17px 0 0!important}
        .anan-footer-description{max-width:340px!important;line-height:1.8!important;color:#81958c!important}
        .anan-footer-label{color:#91aa9d!important;font-size:10px!important;font-weight:800!important;letter-spacing:.2em!important;margin:2px 0 18px!important}
        .anan-footer-column{display:flex;flex-direction:column;align-items:flex-start}
        .anan-footer-column>a{display:flex;align-items:center;gap:7px;color:#e3e9e5!important;font-size:14px!important;margin-bottom:12px;transition:color .2s,transform .2s}
        .anan-footer-column>a:hover{color:#d9bd7f!important;transform:translateX(3px)}
        .anan-footer-column>p:not(.anan-footer-label){color:#aabbb3!important;font-size:13px!important;line-height:1.85;margin:0 0 16px}
        .anan-footer-social-row{border-top:1px solid rgba(255,255,255,.11);border-bottom:1px solid rgba(255,255,255,.11);padding:27px 0;display:flex;justify-content:space-between;align-items:center;gap:30px}
        .anan-footer-social-row .anan-footer-label{margin-bottom:5px!important}
        .anan-footer-social-note{color:#70867d;font-size:12px}
        .anan-footer-socials{display:flex;align-items:center;gap:9px;flex-wrap:wrap;justify-content:flex-end}
        .anan-footer-social{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:10px 13px;color:#d7e0db!important;background:rgba(255,255,255,.035);font-size:12px;transition:transform .25s,background .25s,border-color .25s}
        .anan-footer-social:hover{transform:translateY(-3px);background:rgba(255,255,255,.08);border-color:rgba(214,189,134,.45);color:#fff!important}
        .anan-footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;padding-top:24px;color:#71857c;font-size:11px}
        .anan-footer-credit{display:inline-flex;align-items:center;gap:4px}.anan-footer-credit a{display:inline-flex;align-items:center;gap:3px;color:#d9e1dc!important;font-weight:650}.anan-footer-credit a:hover{color:#d9bd7f!important}
        @media(max-width:900px){.anan-footer-top{grid-template-columns:1.3fr 1fr 1fr;gap:42px}.anan-footer-brand-block{grid-column:1/-1}.anan-footer-description{max-width:520px!important}.anan-footer-social-row{align-items:flex-start;flex-direction:column}.anan-footer-socials{justify-content:flex-start}}
        @media(max-width:640px){.anan-site-footer{padding:68px 0 22px!important}.anan-footer-inner{width:min(100% - 40px,1240px)}.anan-footer-top{grid-template-columns:1fr 1fr;gap:38px 22px;padding-bottom:52px}.anan-footer-brand-block{grid-column:1/-1}.anan-footer-brand{font-size:36px!important}.anan-footer-description{max-width:100%!important}.anan-footer-socials{display:grid;grid-template-columns:repeat(2,1fr);width:100%}.anan-footer-social{justify-content:center}.anan-footer-bottom{flex-direction:column;align-items:flex-start;line-height:1.7}}
      `}</style>
      <footer className="anan-site-footer">
        <div className="anan-footer-glow" aria-hidden="true" />
        <div className="anan-footer-inner">
          <div className="anan-footer-top">
            <div className="anan-footer-brand-block">
              <a className="anan-footer-brand" href="#home" aria-label="ANAN TRAVEL home">ANAN TRAVEL<span>✦</span></a>
              <p>Your pathway to exploration.</p>
              <p className="anan-footer-description">Thoughtful travel planning from Addis Ababa to the world — flights, Umrah, visas, holidays and study abroad.</p>
            </div>
            <div className="anan-footer-column"><p className="anan-footer-label">EXPLORE</p><a href="#services">Our services <ArrowUpRight size={14}/></a><a href="#packages">Experiences <ArrowUpRight size={14}/></a><a href="#about">About us <ArrowUpRight size={14}/></a><a href="#faq">Help & FAQ <ArrowUpRight size={14}/></a></div>
            <div className="anan-footer-column"><p className="anan-footer-label">CONTACT</p><a href="tel:+251960555000">+251 960 555 000</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href={telegram} target="_blank" rel="noopener noreferrer">Telegram <ArrowUpRight size={14}/></a><a href="mailto:info@anantravel.com">info@anantravel.com</a></div>
            <div className="anan-footer-column"><p className="anan-footer-label">VISIT</p><p>Garad Building<br/>Welo Sefer, Addis Ababa<br/>Ethiopia</p><p>Mon–Fri · 8:30 AM–6:00 PM<br/>Sat · 9:00 AM–3:00 PM</p></div>
          </div>
          <div className="anan-footer-social-row"><div><p className="anan-footer-label">FOLLOW ANAN TRAVEL</p><span className="anan-footer-social-note">Facebook · Instagram · TikTok · YouTube · LinkedIn</span></div><div className="anan-footer-socials" aria-label="ANAN TRAVEL social media">{socials.map(({name,icon:Icon})=><span key={name} className="anan-footer-social" title={`${name} account link to be connected`} aria-label={`${name} social media account`}><Icon size={17}/><span>{name}</span></span>)}</div></div>
          <div className="anan-footer-bottom"><span>© {new Date().getFullYear()} ANAN TRAVEL. All rights reserved.</span><span className="anan-footer-credit">Website crafted by <a href="https://hisabtechnologies.com" target="_blank" rel="noopener noreferrer">HisabTech <ArrowUpRight size={12}/></a></span></div>
        </div>
      </footer>
    </>
  );
}
