'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Globe2, Menu, X } from 'lucide-react';

const productLinks = [
  ['Flights & hotels', 'Compare routes and arrange stays', '/services'],
  ['Visa assistance', 'Guidance for global applications', '/services'],
  ['Umrah journeys', 'Flights, visas and accommodation', '/services'],
  ['Tailor-made holidays', 'Trips built around you', '/destinations'],
];

const navLinks = [
  ['Services', '/services'],
  ['Destinations', '/destinations'],
  ['About', '/about'],
  ['FAQ', '/faq'],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`ph-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="ph-header-inner">
        <Link className="ph-logo" href="/" onClick={() => { setOpen(false); setProductsOpen(false); }} aria-label="ANAN TRAVEL home">
          <span>ANAN</span><b>TRAVEL</b>
        </Link>

        <nav className="ph-nav" aria-label="Primary navigation">
          <div className="ph-nav-dropdown-wrap">
            <button className="ph-nav-trigger" type="button" onClick={() => setProductsOpen(v => !v)} aria-expanded={productsOpen}>Services <ChevronDown size={15}/></button>
            {productsOpen && <div className="ph-dropdown" onMouseLeave={() => setProductsOpen(false)}><div className="ph-dropdown-label">TRAVEL SERVICES</div>{productLinks.map(([title, description, href]) => <Link href={href} key={title} onClick={() => setProductsOpen(false)}><span className="ph-dropdown-icon"><Globe2 size={18}/></span><span><strong>{title}</strong><small>{description}</small></span><ArrowUpRight size={16}/></Link>)}</div>}
          </div>
          {navLinks.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>

        <div className="ph-header-actions">
          <Link className="ph-login" href="/contact">Contact</Link>
          <Link className="ph-header-cta" href="/contact">Plan your journey <ArrowUpRight size={15}/></Link>
          <button className="ph-menu" type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="ph-mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
        </div>
      </div>

      <div id="ph-mobile-menu" className={`ph-mobile ${open ? 'visible' : ''}`} aria-hidden={!open}>
        <div className="ph-mobile-inner">
          <div className="ph-mobile-kicker">ANAN TRAVEL · ADDIS ABABA</div>
          <div className="ph-mobile-links">
            {productLinks.map(([title, description, href], i) => <Link href={href} key={title} onClick={() => setOpen(false)}><span>0{i + 1}</span><div><strong>{title}</strong><small>{description}</small></div><ArrowRight size={18}/></Link>)}
            <Link href="/destinations" onClick={() => setOpen(false)}><span>05</span><div><strong>Destinations</strong><small>Explore where you can go</small></div><ArrowRight size={18}/></Link>
            <Link href="/about" onClick={() => setOpen(false)}><span>06</span><div><strong>About ANAN</strong><small>Meet the team</small></div><ArrowRight size={18}/></Link>
          </div>
          <Link className="ph-mobile-cta" href="/contact" onClick={() => setOpen(false)}>Plan your journey <ArrowUpRight size={18}/></Link>
        </div>
      </div>
    </header>
  );
}
