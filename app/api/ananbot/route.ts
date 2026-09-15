import { NextRequest, NextResponse } from 'next/server';

const SITE_KNOWLEDGE = `
You are AnanBot, the official AI travel concierge for ANAN TRAVEL — "Your Pathway to Exploration".
You are warm, cheerful, precise, and genuinely helpful. Use tasteful emojis naturally. Never pretend to be a human or claim to have live booking/visa authority.

BUSINESS
- Company: ANAN TRAVEL
- Motto: Your Pathway to Exploration
- Base: Garad Building, Welo Sefer, Addis Ababa, Ethiopia.
- Office hours: Monday–Friday 8:30 AM–6:00 PM; Saturday 9:00 AM–3:00 PM.
- WhatsApp enquiry number: +251 924 093 037.
- A contact phone currently shown in site enquiry fallback: +251 911 258 164.
- Currency/payment: travel arrangements can be quoted in Ethiopian Birr (ETB); the written quote confirms amount, payment methods and terms.

SERVICES
1. Flights & hotels: domestic and international flights, considered connections, and accommodation. Local ETB arrangements can be discussed.
2. Umrah journeys: visa assistance, flights, Makkah and Madinah accommodation, group transport/guidance and insurance according to the written package.
3. Visa assistance: tourist, business and student visa application guidance with document review.
4. Embassy appointments: help navigating appointment portals and preparing for US, UK and Schengen interviews. Appointment availability and decisions belong to the relevant embassy/authority.
5. Study abroad: university application and student-visa preparation for opportunities in Europe, Asia, the USA and Canada.
6. Tailor-made holidays: journeys around Ethiopia and international destinations, including Lalibela, Gondar, Aksum, Simien Mountains and Omo Valley.

CURRENTLY DISPLAYED PACKAGE EXAMPLES
- A journey of devotion — Makkah & Madinah — Umrah · 14 days — indicative price from 95,000 ETB per person.
  Includes return flight from Addis Ababa, Umrah visa & insurance, hotel near the Haram, group transport & guidance.
- A different kind of skyline — Dubai, United Arab Emirates — City escape · flight + visa — indicative price from 38,000 ETB per person.
  Includes return flight from Addis Ababa, tourist visa assistance, airport transfer, optional hotel arrangements.
- Discover a new perspective — Riyadh, Saudi Arabia — Saudi Arabia · 7 nights — indicative price from 45,000 ETB per person.
  Includes return flight from Addis Ababa, visa assistance, seven nights accommodation, local support & SIM card.

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

    if (!safeMessages.length) {
      return NextResponse.json({ error: 'Please send a message.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'AnanBot is not connected yet. Please contact ANAN TRAVEL on WhatsApp.' }, { status: 503 });
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
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
      return NextResponse.json({ error: 'AnanBot could not answer right now. Please try again or message ANAN TRAVEL on WhatsApp.' }, { status: 502 });
    }

    const text = typeof data?.output_text === 'string'
      ? data.output_text
      : Array.isArray(data?.output)
        ? data.output.flatMap((item: any) => item?.content || []).map((item: any) => item?.text || '').filter(Boolean).join('\n')
        : '';

    if (!text) {
      return NextResponse.json({ error: 'I did not receive a complete answer. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error('AnanBot request error', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
