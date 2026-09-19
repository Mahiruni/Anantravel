import { NextRequest, NextResponse } from 'next/server';

const SITE_KNOWLEDGE = `
You are AnanBot, the official AI travel concierge for ANAN TRAVEL — "Your Pathway to Exploration".
You are warm, cheerful, precise, and genuinely helpful. Use tasteful emojis naturally. Never pretend to be a human or claim to have live booking/visa authority.

BUSINESS
- Company: ANAN TRAVEL
- Motto: Your Pathway to Exploration
- Base: Garad Building, Welo Sefer, Addis Ababa, Ethiopia.
- Office hours: Monday–Friday 8:30 AM–6:00 PM; Saturday 9:00 AM–3:00 PM.
- WhatsApp enquiry number: +251 960 555 000.
- Currency/payment: travel arrangements can be quoted in Ethiopian Birr (ETB); the written quote confirms amount, payment methods and terms.

SERVICES
1. Flights & hotels: domestic and international flights, connections, and accommodation. Local ETB arrangements can be discussed.
2. Umrah journeys: visa assistance, flights, Makkah and Madinah accommodation, group transport/guidance and insurance according to the written package.
3. Visa assistance: tourist, business and student visa application guidance with document review.
4. Embassy appointments: help navigating appointment portals and preparing for US, UK and Schengen interviews. Appointment availability and decisions belong to the relevant embassy/authority.
5. Study abroad: university application and student-visa preparation for opportunities in Europe, Asia, the USA and Canada.
6. Tailor-made holidays: journeys around Ethiopia and international destinations, including Lalibela, Gondar, Aksum, Simien Mountains and Omo Valley.

CURRENTLY DISPLAYED PACKAGE EXAMPLES
- A journey of devotion — Makkah & Madinah — Umrah · 14 days — indicative price from 95,000 ETB per person.
- A different kind of skyline — Dubai, United Arab Emirates — City escape · flight + visa — indicative price from 38,000 ETB per person.
- Discover a new perspective — Riyadh, Saudi Arabia — Saudi Arabia · 7 nights — indicative price from 45,000 ETB per person.

IMPORTANT LIMITS
- Package prices are guide prices, not guaranteed live prices. Availability, inclusions and current pricing are confirmed in a written quote.
- Visa decisions, processing times and appointment availability are controlled by the relevant authorities. Never guarantee a visa, appointment, approval, or exact processing time.
- Booking enquiries can be started via WhatsApp or at the office. An enquiry does not itself confirm a booking or require payment.
- For live flight status, availability, exact fares, current visa rules, or appointment slots, explain that AnanBot can guide the user and then direct them to ANAN TRAVEL staff for confirmation.
- Never ask for passwords, card PINs, one-time passwords, passport scans, or other unnecessary sensitive credentials in chat.

LANGUAGE
The website supports English, Amharic (አማርኛ), and Afaan Oromo (Afaan Oromoo). The user chooses a language before chatting. Reply entirely in that chosen language, except protected proper names such as ANAN TRAVEL, destination names, WhatsApp, ETB, SIM and common international terms when natural.

STYLE
Start the first response with a warm greeting appropriate to the selected language. Be concise but informative. Prefer clear paragraphs and small emoji accents over heavy emoji spam. When useful, suggest a next action such as asking for destination, travel dates, traveller count, or whether the user needs flights, visa, Umrah, holiday, study-abroad, or appointment help.
`;

const languageNames = {
  en: 'English',
  am: 'Amharic (አማርኛ)',
  om: 'Afaan Oromo (Afaan Oromoo)',
} as const;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function localFallback(language: keyof typeof languageNames, message: string) {
  const q = message.toLowerCase();
  const isOffice = /office|location|where|hours|address|ቢሮ|የት|ሰዓት|waajjir|eessa|sa'aatii|sa’aatii/.test(q);
  const isWhatsApp = /whatsapp|contact|phone|number|ስልክ|ዋትስአፕ|qunnamtii|bilbila/.test(q);
  const isUmrah = /umrah|ዑምራ/.test(q);
  const isVisa = /visa|ቪዛ|viizaa/.test(q);
  const isFlight = /flight|hotel|በረራ|ሆቴል|balali/.test(q);

  if (language === 'am') {
    if (isOffice) return 'የANAN TRAVEL ቢሮ በGarad Building, Welo Sefer, Addis Ababa ይገኛል። የስራ ሰዓት፦ ሰኞ–ዓርብ 8:30 AM–6:00 PM፣ ቅዳሜ 9:00 AM–3:00 PM።';
    if (isWhatsApp) return 'በWhatsApp ለANAN TRAVEL ያግኙን፦ +251 960 555 000 📱';
    if (isUmrah) return 'ANAN TRAVEL የዑምራ ጉዞ የቪዛ እገዛ፣ በረራ፣ በመካ እና መዲና ማረፊያ፣ የቡድን መጓጓዣ/መመሪያ እና ኢንሹራንስን እንደ ጥቅሉ ያቀርባል። የዋጋ ምሳሌ፦ ከ95,000 ETB ጀምሮ፣ 14 ቀን። የመጨረሻ ዋጋ በጽሁፍ ይረጋገጣል።';
    if (isVisa) return 'ANAN TRAVEL ለቱሪስት፣ ለንግድ እና ለተማሪ ቪዛ የማመልከቻ መመሪያ እና የሰነድ ግምገማ ይሰጣል። የቪዛ ውሳኔ ግን በተዛማጅ ኤምባሲ/ባለስልጣን ነው።';
    if (isFlight) return 'ANAN TRAVEL የአገር ውስጥና ዓለም አቀፍ በረራዎችን እና ሆቴሎችን ያግዛል። የተወሰነ ዋጋና መገኘት ለማረጋገጥ የጉዞ ቀን፣ መዳረሻ እና የተጓዦች ብዛት ይላኩ።';
    return 'ሰላም! 👋 በረራ፣ ዑምራ፣ ቪዛ፣ የውጭ አገር ትምህርት፣ ዕረፍት ወይም የANAN TRAVEL ቢሮ መረጃ ላይ ልረዳዎ እችላለሁ። ምን ማወቅ ይፈልጋሉ?';
  }

  if (language === 'om') {
    if (isOffice) return 'Waajjirri ANAN TRAVEL Garad Building, Welo Sefer, Addis Ababa keessa jira. Saʼaatiin hojii Wiixata–Jimaata 8:30 AM–6:00 PM, Sanbata 9:00 AM–3:00 PM.';
    if (isWhatsApp) return 'WhatsApp irratti ANAN TRAVEL qunnamaa: +251 960 555 000 📱';
    if (isUmrah) return 'ANAN TRAVEL imala Umrah keessatti gargaarsa viizaa, balaliʼinsa, bakka jireenyaa Makkaa fi Madiinaa, geejjiba/gorsa garee fi inshuraansii akka paakeejii irratti hammatametti ni kenna. Fakkeenya gatii: 95,000 ETB irraa eegala, guyyoota 14. Gatiin dhumaa barreeffamaan ni mirkanaaʼa.';
    if (isVisa) return 'ANAN TRAVEL viizaa turistii, daldalaa fi barataa irratti qajeelfama iyyannoo fi sakattaʼinsa sanadootaa ni kenna. Murtiin viizaa garuu qaama mootummaa ykn embasii dhimmi ilaallatu bira jira.';
    if (isFlight) return 'ANAN TRAVEL balaliʼinsa biyya keessaa fi idil-addunyaa akkasumas hoteelota irratti ni gargaara. Gatii fi argamummaa mirkaneessuuf guyyaa imalaa, bakka dhaquu fi baayʼina imaltootaa nuuf ergaa.';
    return 'Akkam! 👋 Waaʼee balaliʼinsaa, Umrah, viizaa, barnoota biyya alaa, boqonnaa ykn waajjira ANAN TRAVEL irratti isin gargaaruu nan dandaʼa. Maal beekuu barbaaddu?';
  }

  if (isOffice) return 'ANAN TRAVEL is based at Garad Building, Welo Sefer, Addis Ababa. Office hours: Monday–Friday 8:30 AM–6:00 PM; Saturday 9:00 AM–3:00 PM.';
  if (isWhatsApp) return 'You can reach ANAN TRAVEL on WhatsApp at +251 960 555 000 📱';
  if (isUmrah) return 'ANAN TRAVEL can assist with Umrah visa support, flights, Makkah and Madinah accommodation, group transport/guidance and insurance according to the package. An indicative example is 14 days from 95,000 ETB per person. Final availability and pricing are confirmed in writing.';
  if (isVisa) return 'ANAN TRAVEL provides guidance for tourist, business and student visa applications, including document review. Visa decisions and appointment availability remain with the relevant authorities.';
  if (isFlight) return 'ANAN TRAVEL assists with domestic and international flights and hotels. To check a trip, send your destination, travel dates and number of travellers.';
  return 'Hello! 👋 I can help with ANAN TRAVEL flights, Umrah, visas, study abroad, holidays and office information. What would you like to know?';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const language = body?.language as keyof typeof languageNames;
    const messages = Array.isArray(body?.messages) ? (body.messages as ChatMessage[]) : [];

    if (!language || !(language in languageNames)) {
      return NextResponse.json({ error: 'Please choose a supported language first.' }, { status: 400 });
    }

    const safeMessages = messages
      .filter((message) => message && (message.role === 'user' || message.role === 'assistant') && typeof message.content === 'string')
      .slice(-12)
      .map((message) => ({ role: message.role, content: message.content.slice(0, 3500) }));

    if (!safeMessages.length) return NextResponse.json({ error: 'Please send a message.' }, { status: 400 });

    const apiKey = process.env.OPENAI_API_KEY;
    const lastUserMessage = [...safeMessages].reverse().find((message) => message.role === 'user')?.content || '';

    if (!apiKey) {
      return NextResponse.json({ text: localFallback(language, lastUserMessage), fallback: true });
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: process.env.ANANBOT_MODEL || 'gpt-5.6-luna',
        instructions: `${SITE_KNOWLEDGE}\n\nThe selected response language is ${languageNames[language]}. Always answer in ${languageNames[language]}.`,
        input: safeMessages,
        max_output_tokens: 900,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('AnanBot OpenAI error', data);
      const quotaError = data?.error?.code === 'credit_balance_exhausted' || data?.error?.type === 'insufficient_quota';
      if (quotaError) return NextResponse.json({ text: localFallback(language, lastUserMessage), fallback: true });
      return NextResponse.json({ error: 'AnanBot could not answer right now. Please try again or message ANAN TRAVEL on WhatsApp.' }, { status: 502 });
    }

    const text = typeof data?.output_text === 'string'
      ? data.output_text
      : Array.isArray(data?.output)
        ? data.output.flatMap((item: any) => item?.content || []).map((item: any) => item?.text || '').filter(Boolean).join('\n')
        : '';

    if (!text) return NextResponse.json({ text: localFallback(language, lastUserMessage), fallback: true });
    return NextResponse.json({ text });
  } catch (error) {
    console.error('AnanBot request error', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
