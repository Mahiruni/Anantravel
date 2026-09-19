'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Bot, ChevronDown, MessageCircle, Send, Sparkles, X } from 'lucide-react';

type Language = 'en' | 'am' | 'om';
type ChatMessage = { role: 'user' | 'assistant'; content: string };

const languages: { id: Language; label: string; native: string; flag: string }[] = [
  { id: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { id: 'am', label: 'Amharic', native: 'አማርኛ', flag: '🇪🇹' },
  { id: 'om', label: 'Afaan Oromo', native: 'Afaan Oromoo', flag: '🇪🇹' },
];

const copy = {
  en: { choose: 'Choose your chat language', sub: 'AnanBot will reply in your language.', welcome: 'Hello! 👋 I’m AnanBot.', body: 'Your friendly ANAN TRAVEL concierge. Ask me about flights, Umrah, visas, holidays, study abroad, packages, office details, or how to get started.', placeholder: 'Ask AnanBot anything…', starter: ['✈️ Flights', '🕌 Umrah', '🛂 Visa help', '🎓 Study abroad', '🌍 Holidays', '📍 Office & hours'], thinking: 'AnanBot is thinking…', whatsapp: 'Talk to our team on WhatsApp', restart: 'Change language', powered: 'AI travel concierge' },
  am: { choose: 'የውይይት ቋንቋዎን ይምረጡ', sub: 'AnanBot በመረጡት ቋንቋ ይመልስልዎታል።', welcome: 'ሰላም! 👋 እኔ AnanBot ነኝ።', body: 'የANAN TRAVEL የጉዞ ረዳትዎ ነኝ። ስለ በረራ፣ ዑምራ፣ ቪዛ፣ ዕረፍት፣ ትምህርት በውጭ አገር፣ ጥቅሎች፣ የቢሮ መረጃ ወይም ጉዞዎን እንዴት እንደሚጀምሩ ይጠይቁኝ።', placeholder: 'AnanBotን ማንኛውንም ነገር ይጠይቁ…', starter: ['✈️ በረራ', '🕌 ዑምራ', '🛂 የቪዛ እገዛ', '🎓 ትምህርት', '🌍 ዕረፍት', '📍 ቢሮ እና ሰዓት'], thinking: 'AnanBot እያሰበ ነው…', whatsapp: 'በWhatsApp ከቡድናችን ጋር ይነጋገሩ', restart: 'ቋንቋ ቀይር', powered: 'AI የጉዞ ረዳት' },
  om: { choose: 'Afaan marii keessanii filadhaa', sub: 'AnanBot afaan filattan keessatti isiniif deebisa.', welcome: 'Akkam! 👋 Ani AnanBot dha.', body: 'Ani gargaaraa imala ANAN TRAVEL ti. Waa’ee balali’insaa, Umrah, viizaa, boqonnaa, barnoota biyya alaa, paakeejii, odeeffannoo waajjiraa ykn akkamitti imala jalqabdan na gaafadhaa.', placeholder: 'Waan kamiyyuu AnanBot gaafadhu…', starter: ['✈️ Balali’insa', '🕌 Umrah', '🛂 Gargaarsa viizaa', '🎓 Barnoota alaa', '🌍 Boqonnaa', '📍 Waajjiraa fi sa’aatii'], thinking: 'AnanBot yaadaa jira…', whatsapp: 'WhatsApp irratti garee keenya waliin haasa’aa', restart: 'Afaan jijjiiri', powered: 'Gargaaraa imala AI' },
} as const;

const promptForStarter = (index: number, lang: Language) => {
  const prompts: Record<Language, string[]> = {
    en: ['Tell me about flights and hotels.', 'Tell me about Umrah journeys and what is included.', 'What visa assistance does ANAN TRAVEL provide?', 'Tell me about study abroad services.', 'What holiday destinations and packages do you offer?', 'Where is the office and what are the opening hours?'],
    am: ['ስለ በረራ እና ሆቴል አገልግሎት ንገረኝ።', 'ስለ ዑምራ ጉዞ እና በጥቅሉ የሚካተተውን ንገረኝ።', 'ANAN TRAVEL ምን ዓይነት የቪዛ እገዛ ይሰጣል?', 'ስለ ውጭ አገር ትምህርት አገልግሎት ንገረኝ።', 'ምን ዓይነት የዕረፍት መዳረሻዎች እና ጥቅሎች አሉ?', 'ቢሮው የት ነው እና የስራ ሰዓቱ ስንት ነው?'],
    om: ['Waa’ee tajaajila balali’insaa fi hoteelaa naaf himi.', 'Waa’ee imala Umrah fi wanta paakeejii keessatti hammatamu naaf himi.', 'ANAN TRAVEL gorsa viizaa akkamii kenna?', 'Waa’ee tajaajila barnoota biyya alaa naaf himi.', 'Bakki boqonnaa fi paakeejiiwwan maalii jiru?', 'Waajjirri eessa jira, sa’aatiin hojii isaa maal fakkaata?'],
  };
  return prompts[lang][index];
};

const WHATSAPP_NUMBER = '251960555000';
const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export default function AnanBot() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const t = copy[language ?? 'en'];

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, loading]);

  function chooseLanguage(next: Language) {
    setLanguage(next);
    setError('');
    setMessages([{ role: 'assistant', content: copy[next].welcome + '\n\n' + copy[next].body }]);
  }

  async function sendMessage(text: string) {
    if (!language || !text.trim() || loading) return;
    const userMessage: ChatMessage = { role: 'user', content: text.trim() };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput('');
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/ananbot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ language, messages: history }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Unable to reach AnanBot.');
      setMessages((current) => [...current, { role: 'assistant', content: data.text }]);
    } catch (err) {
      setMessages((current) => current.filter((message, index) => !(index === current.length - 1 && message === userMessage)));
      setError(err instanceof Error ? err.message : 'AnanBot is unavailable right now.');
    } finally { setLoading(false); }
  }

  function submit(e: FormEvent) { e.preventDefault(); void sendMessage(input); }

  return <>
    <button className={`ananbot-launcher ${open ? 'is-open' : ''}`} aria-label={open ? 'Close AnanBot' : 'Open AnanBot'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <span className="ananbot-launcher-orbit" aria-hidden="true">✦</span><Bot size={23} aria-hidden="true" /><span className="ananbot-launcher-dot" aria-hidden="true" />
    </button>

    <aside className={`ananbot ${open ? 'is-open' : ''}`} aria-label="AnanBot travel concierge">
      <div className="ananbot-head">
        <div className="ananbot-avatar"><Bot size={21}/><span>✦</span></div>
        <div><strong>AnanBot</strong><small>{t.powered}</small></div>
        <button className="ananbot-close" onClick={() => setOpen(false)} aria-label="Close AnanBot"><X size={18}/></button>
      </div>

      {!language ? <div className="ananbot-language-screen">
        <div className="ananbot-sticker">🌍✈️</div>
        <p className="ananbot-kicker"><Sparkles size={13}/> YOUR TRAVEL CONCIERGE</p>
        <h2>{copy.en.choose}</h2>
        <p>{copy.en.sub}</p>
        <div className="ananbot-language-grid">{languages.map((item) => <button key={item.id} onClick={() => chooseLanguage(item.id)}><span>{item.flag}</span><b>{item.native}</b><ChevronDown size={15}/></button>)}</div>
      </div> : <>
        <div className="ananbot-chat" aria-live="polite">
          {messages.map((message, index) => <div className={`ananbot-message ${message.role}`} key={`${message.role}-${index}`}><div className="ananbot-bubble">{message.content}</div>{message.role === 'assistant' && index === 0 && <div className="ananbot-sticker-row"><span>😊</span><span>✈️</span><span>🌍</span><span>💛</span></div>}</div>)}
          {loading && <div className="ananbot-message assistant"><div className="ananbot-bubble ananbot-typing"><span/><span/><span/> {t.thinking}</div></div>}
          {error && <div className="ananbot-error">{error}</div>}
          <div className="ananbot-quick">{t.starter.map((label, index) => <button key={label} onClick={() => void sendMessage(promptForStarter(index, language))}>{label}</button>)}</div>
          <div ref={endRef}/>
        </div>
        <div className="ananbot-actions"><button onClick={() => { setLanguage(null); setMessages([]); }}>{t.restart}</button><a href={whatsappUrl('Hello ANAN TRAVEL, I would like help with my journey.')} target="_blank" rel="noopener noreferrer"><MessageCircle size={14}/> {t.whatsapp}</a></div>
        <form className="ananbot-compose" onSubmit={submit}><input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t.placeholder} aria-label={t.placeholder} maxLength={1200}/><button type="submit" disabled={!input.trim() || loading} aria-label="Send message"><Send size={17}/></button></form>
      </>}
    </aside>
  </>;
}
