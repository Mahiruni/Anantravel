import Link from 'next/link';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';

type Item={title:string; text:string};
export default function ContentPage({eyebrow,title,lead,items,cta='Start a conversation'}:{eyebrow:string;title:string;lead:string;items:Item[];cta?:string}){return <main className="content-page"><section className="content-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></div></section><section className="content-body container"><div className="content-grid">{items.map((item,i)=><article key={item.title}><span>0{i+1}</span><Check size={18}/><h2>{item.title}</h2><p>{item.text}</p></article>)}</div><div className="content-cta"><div><p className="eyebrow light">ANAN TRAVEL</p><h2>Good travel begins<br/>with a conversation.</h2></div><Link className="button gold" href="/contact">{cta} <ArrowUpRight size={18}/></Link></div></section></main>}
