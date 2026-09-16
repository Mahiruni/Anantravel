'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Globe2, Menu, X } from 'lucide-react';

const links = [
  ['Services', '/services'],
  ['Destinations', '/destinations'],
  ['About', '/about'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="site-header-inner">
          <Link className="site-logo" href="/" onClick={() => setOpen(false)} aria-label="ANAN TRAVEL home">
            <span>ANAN TRAVEL</span><b>✦</b>
            <small>YOUR PATHWAY TO EXPLORATION</small>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>

          <div className="site-actions">
            <Link className="site-plan" href="/#booking">Plan your journey <ArrowUpRight size={15}/></Link>
            <button className="site-menu-button" type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="site-mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>
              <span className="menu-icon">{open ? <X size={25}/> : <Menu size={25}/>}</span>
              <span className="menu-word">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <div id="site-mobile-menu" className={`site-menu-panel ${open ? 'visible' : ''}`} aria-hidden={!open}>
        <div className="site-menu-backdrop" onClick={() => setOpen(false)} />
        <div className="site-menu-content">
          <div className="site-menu-head"><span>ANAN TRAVEL</span><span>01—05</span></div>
          <nav>
            {links.map(([label, href], i) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span><strong>{label}</strong><ArrowRight size={22}/></Link>)}
          </nav>
          <div className="site-menu-bottom"><Globe2 size={18}/><span>Addis Ababa · Ethiopia</span><Link href="/contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight size={15}/></Link></div>
        </div>
      </div>
    </>
  );
}
