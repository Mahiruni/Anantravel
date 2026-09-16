'use client';

import { MessageCircle } from 'lucide-react';

const whatsapp = 'https://wa.me/251960555000?text=Hello%20ANAN%20TRAVEL%2C%20I%20would%20like%20to%20chat%20with%20your%20team.';

export default function FooterCredit() {
  return (
    <>
      <style>{`
        .anan-chat-orb{position:fixed;right:24px;bottom:28px;z-index:1200;width:58px;height:58px;display:grid;place-items:center;border:1px solid rgba(214,189,134,.55);border-radius:50%;background:#0e2922;color:#f5f1e8;text-decoration:none;box-shadow:0 12px 32px rgba(8,25,20,.28),inset 0 1px 0 rgba(255,255,255,.12);transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s,border-color .25s}
        .anan-chat-orb::before{content:'';position:absolute;inset:-6px;border:1px solid rgba(214,189,134,.22);border-radius:50%;transform:scale(.92);opacity:0;transition:transform .35s,opacity .35s}
        .anan-chat-orb:hover{transform:translateY(-5px) scale(1.05);border-color:#d6bd86;box-shadow:0 18px 40px rgba(8,25,20,.34),inset 0 1px 0 rgba(255,255,255,.15)}
        .anan-chat-orb:hover::before{transform:scale(1);opacity:1}
        .anan-chat-orb svg{width:25px;height:25px;stroke-width:1.65}
        .anan-chat-orb .orb-dot{position:absolute;right:3px;top:3px;width:10px;height:10px;border-radius:50%;background:#d6bd86;border:2px solid #0e2922;box-shadow:0 0 0 3px rgba(214,189,134,.13)}
        .anan-footer-social{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:1px solid rgba(255,255,255,.12);border-radius:50%;color:#d7e0db;background:rgba(255,255,255,.035);transition:transform .25s,background .25s,border-color .25s}
        .anan-footer-social:hover{transform:translateY(-3px);background:rgba(255,255,255,.08);border-color:rgba(214,189,134,.45);color:#fff}
        @media(max-width:640px){.anan-chat-orb{right:16px;bottom:18px;width:52px;height:52px}.anan-chat-orb svg{width:23px;height:23px}}
        @media(prefers-reduced-motion:reduce){.anan-chat-orb,.anan-chat-orb::before{transition:none}.anan-chat-orb:hover{transform:none}}
      `}</style>
      <a className="anan-chat-orb" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with ANAN TRAVEL on WhatsApp" title="WhatsApp ANAN TRAVEL">
        <MessageCircle aria-hidden="true" />
        <span className="orb-dot" aria-hidden="true" />
      </a>
    </>
  );
}
