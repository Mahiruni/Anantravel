'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Globe2, HeartHandshake, Plane, ShieldCheck, WalletCards } from 'lucide-react';

const wa = (message: string) => `https://wa.me/251960555000?text=${encodeURIComponent(message)}`;

const solutions = [
  { icon: Plane, title: 'Flights & hotels', text: 'Compare routes, arrange flights and find stays that fit your dates and budget.', href: '/services' },
  { icon: Globe2, title: 'Visa assistance', text: 'Practical guidance for tourist, business and student applications.', href: '/services' },
  { icon: HeartHandshake, title: 'Umrah journeys', text: 'Flights, visas, accommodation and group support for your pilgrimage.', href: '/services' },
  { icon: WalletCards, title: 'Tailor-made travel', text: 'A complete itinerary built around how you want to experience the world.', href: '/destinations' },
];

const audiences = [
  ['Business travel', 'Efficient international trips, clear coordination and support when plans change.'],
  ['Families & groups', 'One team to coordinate flights, hotels, transfers and the details in between.'],
  ['Students', 'Support from university applications through the practical steps of preparing to travel.'],
  ['Pilgrims', 'Thoughtfully arranged Umrah journeys with local support before and during your trip.'],
];

const stats = [
  ['50+', 'destinations available'],
  ['24/7', 'travel assistance'],
  ['ETB', 'local payment support'],
  ['1 team', 'from Addis Ababa'],
];

export default function HomePage() {
  return (
    <main className="payoneer-home">
      <section className="ph-hero">
        <div className="container ph-hero-grid">
          <div className="ph-hero-copy">
            <p className="ph-kicker">ANAN TRAVEL · ADDIS ABABA</p>
            <h1>Move through the world with <span>confidence.</span></h1>
            <p className="ph-lead">Flights, visas, Umrah and tailor-made journeys — brought together by a travel team that knows how to make global travel feel simpler.</p>
            <div className="ph-actions">
              <Link className="ph-button ph-button-primary" href="/contact">Plan your journey <ArrowUpRight size={18}/></Link>
              <Link className="ph-button ph-button-link" href="/destinations">Explore destinations <ArrowRight size={18}/></Link>
            </div>
            <div className="ph-proof"><ShieldCheck size={18}/><span>Clear quotes · Local support · Human assistance</span></div>
          </div>
          <div className="ph-hero-visual">
            <div className="ph-orbit ph-orbit-one" />
            <div className="ph-orbit ph-orbit-two" />
            <div className="ph-hero-image-wrap"><Image src="/images/hero.jpg" alt="Airplane wing above clouds" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
            <div className="ph-floating-card ph-card-route"><span>YOUR NEXT ROUTE</span><strong>ADD → DXB → JED</strong><small>One team. Every detail.</small></div>
            <div className="ph-floating-card ph-card-price"><span>LOCAL SUPPORT</span><strong>ETB</strong><small>Pay locally when available</small></div>
          </div>
        </div>
        <div className="ph-hero-bottom container"><span>YOUR PATHWAY TO EXPLORATION</span><span>ETHIOPIA → THE WORLD</span></div>
      </section>

      <section className="ph-trust container">
        <div className="ph-trust-label">TRAVEL SERVICES FOR<br/><strong>EVERY KIND OF JOURNEY</strong></div>
        {['FLIGHTS', 'VISAS', 'UMRAH', 'HOLIDAYS', 'STUDY ABROAD'].map(item => <span key={item}>{item}</span>)}
      </section>

      <section className="ph-section container ph-solutions" id="services">
        <div className="ph-section-head"><div><p className="ph-kicker">WHAT WE CAN DO FOR YOU</p><h2>One travel partner.<br/><span>More possibilities.</span></h2></div><p>From a flight tomorrow to a journey you have dreamed about for years, ANAN TRAVEL brings the practical pieces together in one place.</p></div>
        <div className="ph-solution-grid">
          {solutions.map(({ icon: Icon, title, text, href }, index) => <Link href={href} className="ph-solution" key={title}><div className="ph-solution-top"><span>0{index + 1}</span><Icon size={25}/></div><div><h3>{title}</h3><p>{text}</p></div><span className="ph-arrow"><ArrowUpRight size={19}/></span></Link>)}
        </div>
      </section>

      <section className="ph-platform">
        <div className="container ph-platform-grid">
          <div className="ph-platform-copy"><p className="ph-kicker">A BETTER WAY TO PLAN</p><h2>Everything your journey needs, <span>in one conversation.</span></h2><p>Tell us where you are going, when you want to travel and what matters to you. We turn that information into a practical plan — with transparent next steps before you commit.</p><ul>{['Personal itinerary planning', 'Visa and documentation guidance', 'Flight and accommodation coordination', 'WhatsApp support from a real person'].map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul><Link className="ph-button ph-button-light" href="/contact">Start planning <ArrowRight size={18}/></Link></div>
          <div className="ph-dashboard"><div className="ph-dash-top"><span>ANAN TRAVEL</span><span>MY JOURNEY · 04</span></div><div className="ph-dash-main"><div className="ph-route-line"><span>ADD</span><i/><span>JED</span></div><div className="ph-dash-details"><div><small>DEPARTURE</small><strong>18 OCT</strong><span>Addis Ababa</span></div><div><small>JOURNEY</small><strong>UMRAH</strong><span>14 days</span></div><div><small>STATUS</small><strong className="ready">READY</strong><span>Support included</span></div></div></div><div className="ph-dash-footer"><span>Visa assistance</span><span>Hotel coordination</span><span>Local support</span></div></div>
        </div>
      </section>

      <section className="ph-section container ph-audience">
        <div className="ph-section-head"><div><p className="ph-kicker">BUILT AROUND YOU</p><h2>Wherever your journey begins, <span>start here.</span></h2></div><Link className="ph-button ph-button-outline" href="/services">View all services <ArrowUpRight size={17}/></Link></div>
        <div className="ph-audience-grid">{audiences.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><Link href="/contact">Learn more <ChevronRight size={16}/></Link></article>)}</div>
      </section>

      <section className="ph-story">
        <div className="container ph-story-grid"><div className="ph-story-image"><Image src="/images/umrah.jpg" alt="Umrah journey" fill sizes="(max-width: 900px) 100vw, 50vw"/></div><div className="ph-story-copy"><p className="ph-kicker">A JOURNEY WORTH TAKING</p><h2>Go somewhere that <span>stays with you.</span></h2><p>Discover Ethiopia, the Gulf and destinations beyond. Our team can build a trip around your purpose, pace and budget — not a template.</p><div className="ph-story-meta"><div><strong>14 days</strong><span>Featured Umrah</span></div><div><strong>Makkah + Madinah</strong><span>Thoughtfully arranged</span></div></div><Link className="ph-button ph-button-primary" href="/destinations">Discover journeys <ArrowRight size={18}/></Link></div></div>
      </section>

      <section className="ph-stats container">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="ph-final"><div className="container"><p className="ph-kicker">READY WHEN YOU ARE</p><h2>The world is closer<br/><span>than you think.</span></h2><p>Start with a question. We will help you take the next step.</p><div className="ph-actions"><Link className="ph-button ph-button-primary" href="/contact">Talk to ANAN TRAVEL <ArrowUpRight size={18}/></Link><a className="ph-button ph-button-link" href={wa('Hello ANAN TRAVEL, I would like help planning a journey.')}>WhatsApp us <ArrowRight size={18}/></a></div></div></section>
    </main>
  );
}
