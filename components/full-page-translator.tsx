'use client';

import { useEffect } from 'react';

type Lang = 'en' | 'am' | 'om';

const keep = ['ANAN TRAVEL','Addis Ababa','Makkah','Madinah','Dubai','United Arab Emirates','Riyadh','Saudi Arabia','Lalibela','Gondar','Aksum','Simien Mountains','Omo Valley','WhatsApp','ETB','SIM','US','UK','Schengen'];

const am: Record<string,string> = {
  'Skip to content':'ወደ ዋናው ይዘት ይሂዱ','Plan your journey':'ጉዞዎን ያቅዱ','Services':'አገልግሎቶች','Our services':'አገልግሎቶቻችን','Experiences':'ልምዶች','About ANAN TRAVEL':'ስለ ANAN TRAVEL','Help & FAQ':'እገዛ እና ተደጋጋሚ ጥያቄዎች','Contact':'ያግኙን','Help':'እገዛ','Book':'ይዘዙ','Manage':'ያስተዳድሩ','Experience':'ልምድ','The world is waiting.':'ዓለም እየጠበቀች ነው።','Make it yours.':'የእርስዎ ያድርጉት።','Find your next journey':'ቀጣዩን ጉዞዎን ያግኙ','Explore our experiences':'ልምዶቻችንን ያስሱ','YOUR PATHWAY TO EXPLORATION':'የእርስዎ የፍለጋ መንገድ','LET’S BEGIN':'እንጀምር','Where will you go next?':'ቀጣዩ ጉዞዎ የት ነው?','Tell us your plans. We’ll take it from here.':'እቅዶችዎን ይንገሩን። ከዚህ በኋላ እኛ እንቀጥላለን።','Flights':'በረራዎች','Visa services':'የቪዛ አገልግሎቶች','Holidays':'የዕረፍት ጉዞዎች','From':'ከ','Your name':'ስምዎ','Full name':'ሙሉ ስም','Where do you want to go?':'የት መሄድ ይፈልጋሉ?','Select your destination':'መድረሻዎን ይምረጡ','Travel date':'የጉዞ ቀን','Phone Number':'ስልክ ቁጥር','Request a quote':'የዋጋ ጥቅስ ይጠይቁ','Travel':'ጉዞ','date':'ቀን','Phone':'ስልክ','Name':'ስም','Destination':'መድረሻ','Request':'ጥያቄ','Quote':'ጥቅስ','Let’s talk':'እንነጋገር','Flights & hotels':'በረራዎች እና ሆቴሎች','Umrah journeys':'የኡምራ ጉዞዎች','Visa assistance':'የቪዛ እገዛ','Embassy appointments':'የኤምባሲ ቀጠሮዎች','Study abroad':'በውጭ አገር ጥናት','Tailor-made holidays':'በፍላጎት የተዘጋጁ ዕረፍቶች','THOUGHTFULLY ARRANGED':'በጥንቃቄ የተዘጋጀ','More possibilities.':'ተጨማሪ እድሎች።','Less to worry about.':'የሚያሳስብ ነገር ያነሰ።','JOURNEYS WORTH TAKING':'ሊደረጉ የሚገቡ ጉዞዎች','Some places stay':'አንዳንድ ቦታዎች ይቀሩልዎታል','with you.':'ከእርስዎ ጋር።','A journey of devotion':'የአምልኮ ጉዞ','A different kind of skyline':'የተለየ የከተማ እይታ','Discover a new perspective':'አዲስ እይታ ያግኙ','Return flight from Addis Ababa':'የመመለሻ በረራ ከ Addis Ababa','Airport transfer':'የአየር ማረፊያ መጓጓዣ','Hotel near the Haram':'ከሐረም አጠገብ ሆቴል','Group transport & guidance':'የቡድን መጓጓዣ እና መመሪያ','Indicative price from':'ግምታዊ ዋጋ ከ','A LOCAL TEAM. A PERSONAL CONNECTION.':'የአካባቢ ቡድን። የግል ግንኙነት።','Your journey.':'ጉዞዎ።','Meet us in Addis Ababa':'በ Addis Ababa ያግኙን','Good travel begins with someone who listens.':'ጥሩ ጉዞ የሚጀምረው የሚያዳምጥ ሰው ሲኖር ነው።','Personal, from the start':'ከመጀመሪያው ጀምሮ የግል','Clarity before commitment':'ከቁርጠኝነት በፊት ግልጽነት','ALREADY PLANNING YOUR DEPARTURE?':'መነሳትዎን አስቀድመው እያቀዱ ነው?','Ask about your flight':'ስለ በረራዎ ይጠይቁ','THE PEOPLE BEHIND THE JOURNEYS':'ከጉዞዎቹ በስተጀርባ ያሉ ሰዎች','Travel is personal.':'ጉዞ የግል ነው።','A FEW THINGS TO KNOW':'ማወቅ ያለብዎት ጥቂት ነገሮች','Before':'በፊት','Still have a question? We’re here.':'አሁንም ጥያቄ አለዎት? እዚህ ነን።','Talk to our team':'ከቡድናችን ጋር ይነጋገሩ'
};

const om: Record<string,string> = {
  'Skip to content':'Gara qabiyyee ijoo darbii','Plan your journey':'Imala kee qopheessi','Services':'Tajaajiloota','Our services':'Tajaajiloota keenya','Experiences':'Muuxannoowwan','About ANAN TRAVEL':'Waa’ee ANAN TRAVEL','Help & FAQ':'Gargaarsa & FAQ','Contact':'Nu qunnami','Help':'Gargaarsa','Book':'Qabadhaa','Manage':'Bulchi','Experience':'Muuxannoo','The world is waiting.':'Addunyaan si eeggataa jirti.','Make it yours.':'Kan kee godhi.','Find your next journey':'Imala kee itti aanu argadhu','Explore our experiences':'Muuxannoo keenya daawwadhu','YOUR PATHWAY TO EXPLORATION':'DAANDII KEE GARA DAWWANNAA','LET’S BEGIN':'HAA JALQABNU','Where will you go next?':'Itti aansee eessa deemta?','Tell us your plans. We’ll take it from here.':'Karoora kee nutti himi. As irraa kaasnee ni qindeessina.','Flights':'Balali’oota','Visa services':'Tajaajila viizaa','Holidays':'Boqonnaa','From':'Ka’umsa','Your name':'Maqaa kee','Full name':'Maqaa guutuu','Where do you want to go?':'Eessa deemuu barbaadda?','Select your destination':'Bakka geessituu filadhu','Travel date':'Guyyaa imalaa','Phone Number':'Lakkoofsa bilbilaa','Request a quote':'Gatii gaafadhu','Travel':'Imala','date':'Guyyaa','Phone':'Bilbila','Name':'Maqaa','Destination':'Bakka geessituu','Request':'Gaaffii','Quote':'Gatii','Let’s talk':'Haa haasofnu','Flights & hotels':'Balaliiwwan & hoteelota','Umrah journeys':'Imala Umraa','Visa assistance':'Gargaarsa viizaa','Embassy appointments':'Beellama embasii','Study abroad':'Barnoota biyya alaa','Tailor-made holidays':'Boqonnaa fedhii keetiin qophaa’e','THOUGHTFULLY ARRANGED':'Qoramee qindaa’ame','More possibilities.':'Carraawwan dabalataa.','Less to worry about.':'Yaaddoo xiqqaa.','JOURNEYS WORTH TAKING':'IMALA GOCHUUN','Some places stay':'Bakkeewwan tokko tokko si waliin turu','with you.':'si waliin.','A journey of devotion':'Imala ibaadaa','A different kind of skyline':'Mul’ata magaalaa adda ta’e','Discover a new perspective':'Ilaalcha haaraa argadhu','Return flight from Addis Ababa':'Balalii deebii Addis Ababa irraa','Airport transfer':'Geejjiba buufata xiyyaaraa','Hotel near the Haram':'Hoteela Haram bira','Group transport & guidance':'Geejjiba garee & qajeelfama','Indicative price from':'Gatiin tilmaamaa irraa','A LOCAL TEAM. A PERSONAL CONNECTION.':'GAREE NAANNOO. WALQUNNAMTII DHUUNFAA.','Your journey.':'Imala kee.','Meet us in Addis Ababa':'Addis Ababa keessatti nu qunnami','Good travel begins with someone who listens.':'Imalli gaariin nama si dhaggeeffatu waliin jalqaba.','Personal, from the start':'Jalqaba irraa kaasee dhuunfaa','Clarity before commitment':'Murtee dura iftoomina','ALREADY PLANNING YOUR DEPARTURE?':'BA’UU KEE DURSEE KAROORSITAA?','Ask about your flight':'Waa’ee balalii kee gaafadhu','THE PEOPLE BEHIND THE JOURNEYS':'NAMOOTA IMALA DUUBA JIRAN','Travel is personal.':'Imalli dhuunfaadha.','A FEW THINGS TO KNOW':'WANTOOTA XIQQOO BEEKUU QABDU','Before':'DURA','Still have a question? We’re here.':'Ammas gaaffii qabdaa? As jirra.','Talk to our team':'Garee keenya waliin haasayi'
};

function translate(value: string, dict: Record<string,string>) {
  const exact = dict[value.trim()];
  if (exact) return exact;
  let out = value;
  const saved: string[] = [];
  keep.forEach((term,i)=>{ if(out.includes(term)){saved[i]=term;out=out.split(term).join(`__KEEP_${i}__`);} });
  Object.entries(dict).sort((a,b)=>b[0].length-a[0].length).forEach(([from,to])=>{out=out.split(from).join(to);});
  saved.forEach((term,i)=>{out=out.split(`__KEEP_${i}__`).join(term);});
  return out;
}

function translatePage(lang: Lang) {
  if(lang === 'en') { window.location.reload(); return; }
  const dict = lang === 'am' ? am : om;
  const root = document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach(text=>{ if(text.parentElement?.closest('script,style,select.language')) return; if(text.nodeValue?.trim()) text.nodeValue=translate(text.nodeValue,dict); });
  ['placeholder','aria-label','title'].forEach(attr=>document.querySelectorAll<HTMLElement>(`[${attr}]`).forEach(el=>{const v=el.getAttribute(attr);if(v)el.setAttribute(attr,translate(v,dict));}));
  document.documentElement.lang=lang;
}

export default function FullPageTranslator(){
  useEffect(()=>{
    const select=document.querySelector<HTMLSelectElement>('.language select');
    if(!select) return;
    const change=()=>translatePage((select.value as Lang)||'en');
    select.addEventListener('change',change);
    return()=>select.removeEventListener('change',change);
  },[]);
  return null;
}
