'use client';

import { useEffect } from 'react';

type Lang = 'en' | 'am' | 'om';

type Dict = Record<string, string>;

const phraseDict: Record<Exclude<Lang, 'en'>, Dict> = {
  am: {
    'Skip to content':'ወደ ዋናው ይዘት ይሂዱ',
    'Language for introduction and booking':'ለመግቢያ እና ለቦታ ማስያዣ ቋንቋ',
    'Main navigation':'ዋና አሰሳ', 'Mobile navigation':'የሞባይል አሰሳ',
    'Plan your journey':'ጉዞዎን ያቅዱ', 'Close navigation':'አሰሳውን ዝጋ', 'Open navigation':'አሰሳውን ክፈት',
    'Our services':'አገልግሎቶቻችን', 'Experiences':'ልምዶች', 'About ANAN TRAVEL':'ስለ ANAN TRAVEL', 'Help & FAQ':'እገዛ እና ተደጋጋሚ ጥያቄዎች', 'Contact':'ያግኙን',
    'Services':'አገልግሎቶች', 'Book':'ይዘዙ', 'Manage':'ያስተዳድሩ', 'Experience':'ልምድ', 'Help':'እገዛ',
    'ADDIS ABABA. THE WORLD. YOUR WAY.':'አዲስ አበባ። ዓለም። በእርስዎ መንገድ።',
    'The world is waiting.':'ዓለም እየጠበቀች ነው።', 'Make it yours.':'የእርስዎ ያድርጉት።',
    'Extraordinary places. Meaningful journeys. From your first question to your flight home, we take care of the details.':'ድንቅ መዳረሻዎች። ትርጉም ያላቸው ጉዞዎች። ከመጀመሪያው ጥያቄዎ እስከ የመመለሻ በረራዎ ድረስ ዝርዝሮቹን እንንከባከባለን።',
    'Find your next journey':'ቀጣዩን ጉዞዎን ያግኙ', 'Explore our experiences':'ልምዶቻችንን ያስሱ',
    'YOUR PATHWAY TO EXPLORATION':'የእርስዎ የፍለጋ መንገድ', 'Rooted in Addis Ababa. Connected to the world.':'መሠረታችን በአዲስ አበባ ነው። ከዓለም ጋር የተገናኘን ነን።', 'SCROLL TO DISCOVER ↓':'ለመመርመር ወደ ታች ይሸብልሉ ↓',
    'LET’S BEGIN':'እንጀምር', 'Where will you go next?':'ቀጣዩ ጉዞዎ የት ነው?', 'Tell us your plans. We’ll take it from here.':'እቅዶችዎን ይንገሩን። ከዚህ በኋላ እኛ እንቀጥላለን።',
    'Enquiry type':'የጥያቄ አይነት', 'Flights':'በረራዎች', 'Visa services':'የቪዛ አገልግሎቶች', 'Holidays':'የዕረፍት ጉዞዎች',
    'From':'ከ', 'Your name':'ስምዎ', 'Where do you want to go?':'የት መሄድ ይፈልጋሉ?', 'Full name':'ሙሉ ስም', 'Select your destination':'መድረሻዎን ይምረጡ', 'Travel date':'የጉዞ ቀን', 'Phone Number':'ስልክ ቁጥር', 'Request a quote':'የዋጋ ጥቅስ ይጠይቁ',
    'Opens WhatsApp with your details. Send your message there to start your enquiry. No payment required.':'ዝርዝሮችዎን ይዞ WhatsApp ይከፍታል። ጥያቄዎን ለመጀመር መልዕክትዎን እዚያ ይላኩ። ክፍያ አያስፈልግም።',
    'Your enquiry is ready in WhatsApp. Please send it there.':'ጥያቄዎ WhatsApp ላይ ዝግጁ ነው። እባክዎ እዚያ ይላኩት።', 'open our chat':'ውይይታችንን ይክፈቱ', 'or call':'ወይም ይደውሉ',
    'PERSONAL SERVICE.':'የግል አገልግሎት።', 'EVERY STEP OF THE WAY.':'በጉዞው በእያንዳንዱ ደረጃ።', 'Addis Ababa based':'መሠረቱ አዲስ አበባ ነው', 'Pay locally in ETB':'በETB በአካባቢው ይክፈሉ', 'Domestic & international':'የአገር ውስጥ እና ዓለም አቀፍ', 'A real person to help':'እውነተኛ ሰው ሊረዳዎ አለ',
    'THOUGHTFULLY ARRANGED':'በጥንቃቄ የተዘጋጀ', 'More possibilities.':'ተጨማሪ እድሎች።', 'Less to worry about.':'የሚያሳስብ ነገር ያነሰ።',
    'A pilgrimage. A new beginning. A well-earned escape.':'የሐጅ ጉዞ። አዲስ ጅማሬ። በትጋት የተገኘ ዕረፍት።', 'Whatever takes you there, we help make the journey feel effortless.':'ወደዚያ የሚወስድዎት ምንም ቢሆን ጉዞው ቀላል እንዲሰማዎት እንረዳለን።',
    'THE WORLD, WITHIN REACH':'ዓለም፣ በእጅ ርቀት', 'TRAVEL WITH PURPOSE':'በዓላማ ይጓዙ', 'CLARITY AT EVERY STEP':'በእያንዳንዱ ደረጃ ግልጽነት', 'PREPARED, NOT OVERWHELMED':'የተዘጋጀ፣ ያልተደናገጠ', 'A NEW CHAPTER':'አዲስ ምዕራፍ', 'FOLLOW YOUR CURIOSITY':'የማወቅ ጉጉትዎን ይከተሉ',
    'Flights & hotels':'በረራዎች እና ሆቴሎች', 'Domestic and international flights, considered connections and somewhere special to stay. Arrange your journey locally in Ethiopian Birr.':'የአገር ውስጥ እና ዓለም አቀፍ በረራዎች፣ በጥንቃቄ የተመረጡ ግንኙነቶች እና ልዩ የመቆያ ቦታ። ጉዞዎን በኢትዮጵያ ብር በአካባቢው ያዘጋጁ።',
    'Umrah journeys':'የኡምራ ጉዞዎች', 'A meaningful journey, thoughtfully arranged. Visa assistance, flights, Makkah and Madinah accommodation, and dedicated group support.':'ትርጉም ያለው ጉዞ በጥንቃቄ የተዘጋጀ። የቪዛ እገዛ፣ በረራዎች፣ በመካ እና መዲና ማረፊያ እና የቡድን ድጋፍ።',
    'Visa assistance':'የቪዛ እገዛ', 'Clear guidance for tourist, business and student visa applications, with a careful review of your documentation.':'ለቱሪስት፣ ለንግድ እና ለተማሪ ቪዛ ማመልከቻዎች ግልጽ መመሪያ እና የሰነዶችዎ ጥንቃቄ ያለው ግምገማ።',
    'Embassy appointments':'የኤምባሲ ቀጠሮዎች', 'Help navigating appointment portals and preparing for US, UK and Schengen interviews. Availability and decisions remain with the embassy.':'የቀጠሮ ፖርታሎችን ለማስተዳደር እና ለUS፣ UK እና Schengen ቃለ መጠይቆች ለመዘጋጀት እገዛ። ተገኝነት እና ውሳኔዎች የኤምባሲው ሃላፊነት ናቸው።',
    'Study abroad':'በውጭ አገር ጥናት', 'From university applications to student visa preparation, personal guidance for opportunities in Europe, Asia, the USA and Canada.':'ከዩኒቨርሲቲ ማመልከቻ እስከ የተማሪ ቪዛ ዝግጅት ድረስ በአውሮፓ፣ እስያ፣ USA እና ካናዳ ላሉ እድሎች የግል መመሪያ።',
    'Tailor-made holidays':'በፍላጎት የተዘጋጁ ዕረፍቶች', 'Discover Lalibela, Gondar, Aksum, the Simien Mountains and the Omo Valley, with a journey shaped around your interests and pace.':'ላሊበላን፣ ጎንደርን፣ አክሱምን፣ የስሜን ተራሮችን እና የኦሞ ሸለቆን ያግኙ፤ ጉዞውም በፍላጎትዎ እና በፍጥነትዎ ይዘጋጃል።',
    'Let’s talk':'እንነጋገር', 'JOURNEYS WORTH TAKING':'ሊደረጉ የሚገቡ ጉዞዎች', 'Some places stay':'አንዳንድ ቦታዎች ይቀሩልዎታል', 'with you.':'ከእርስዎ ጋር።', 'Three ways to begin your next chapter.':'ቀጣዩን ምዕራፍዎን ለመጀመር ሦስት መንገዶች።', 'Every package can start with a conversation.':'እያንዳንዱ ጥቅል በውይይት ሊጀምር ይችላል።',
    'A journey of devotion':'የአምልኮ ጉዞ', 'A different kind of skyline':'የተለየ የከተማ እይታ', 'Discover a new perspective':'አዲስ እይታ ያግኙ',
    'UMRAH · 14 DAYS':'ኡምራ · 14 ቀናት', 'CITY ESCAPE · FLIGHT + VISA':'የከተማ ዕረፍት · በረራ + ቪዛ', 'SAUDI ARABIA · 7 NIGHTS':'ሳውዲ አረቢያ · 7 ሌሊቶች',
    'Return flight from Addis Ababa':'የመመለሻ በረራ ከአዲስ አበባ', 'Umrah visa & insurance':'የኡምራ ቪዛ እና ኢንሹራንስ', 'Hotel near the Haram':'ከሐረም አጠገብ ሆቴል', 'Group transport & guidance':'የቡድን መጓጓዣ እና መመሪያ',
    'Tourist visa assistance':'የቱሪስት ቪዛ እገዛ', 'Airport transfer':'የአየር ማረፊያ መጓጓዣ', 'Optional hotel arrangements':'አማራጭ የሆቴል ዝግጅቶች', 'Visa assistance':'የቪዛ እገዛ', 'Seven nights’ accommodation':'የሰባት ሌሊት ማረፊያ', 'Local support & SIM card':'የአካባቢ ድጋፍ እና SIM ካርድ',
    'Indicative price from':'ግምታዊ ዋጋ ከ', 'Guide prices from the supplied package list, per person. Availability, inclusions and current pricing are confirmed in your written quote.':'ከተሰጠው የጥቅል ዝርዝር የተገኘ ግምታዊ ዋጋ በሰው። ተገኝነት፣ የተካተቱ ነገሮች እና የአሁኑ ዋጋ በጽሑፍ ጥቅስዎ ይረጋገጣሉ።',
    'A LOCAL TEAM. A PERSONAL CONNECTION.':'የአካባቢ ቡድን። የግል ግንኙነት።', 'Your journey.':'ጉዞዎ።', 'Our':'የእኛ', 'attention':'ትኩረት', 'to detail.':'ለዝርዝር።', 'Meet us in Addis Ababa':'በአዲስ አበባ ያግኙን',
    'Good travel begins with someone who listens.':'ጥሩ ጉዞ የሚጀምረው የሚያዳምጥ ሰው ሲኖር ነው።', 'At ANAN TRAVEL, based at Garad Building in Welo Sefer, we bridge the gap between your travel dreams and the details that make them possible.':'በወሎ ሰፈር ጋራድ ህንፃ የሚገኘው ANAN TRAVEL የጉዞ ህልሞችዎን እና እነሱን እውን የሚያደርጉ ዝርዝሮችን እናገናኛለን።',
    'International bookings, unfamiliar paperwork and foreign currency payments can feel complicated. Our team helps you navigate the process locally, so you can focus on what lies ahead.':'ዓለም አቀፍ ምዝገባዎች፣ ያልተለመዱ የወረቀት ስራዎች እና የውጭ ምንዛሬ ክፍያዎች ውስብስብ ሊመስሉ ይችላሉ። ቡድናችን ሂደቱን በአካባቢው እንዲከተሉ ይረዳዎታል፣ ስለዚህ ወደፊት ባለው ነገር ላይ ማተኮር ይችላሉ።',
    'Personal, from the start':'ከመጀመሪያው ጀምሮ የግል', 'Plans built around your purpose, preferences and budget.':'እቅዶች በዓላማዎ፣ ምርጫዎ እና በጀትዎ ዙሪያ ይገነባሉ።', 'Clarity before commitment':'ከቁርጠኝነት በፊት ግልጽነት', 'Written quotes and a conversation about what is included.':'የጽሑፍ ጥቅስ እና ስለተካተቱ ነገሮች ውይይት።',
    'ALREADY PLANNING YOUR DEPARTURE?':'መነሳትዎን አስቀድመው እያቀዱ ነው?', 'A little reassurance':'ትንሽ ማረጋገጫ', 'goes a long way.':'ብዙ ይረዳል።',
    'Need to check your flight, discuss baggage or change your plans? Share your flight number and travel date with our team for assistance.':'በረራዎን ማረጋገጥ፣ ስለ ሻንጣ መጠየቅ ወይም እቅድዎን መቀየር ይፈልጋሉ? ለእርዳታ የበረራ ቁጥርዎን እና የጉዞ ቀንዎን ለቡድናችን ያጋሩ።', 'Ask about your flight':'ስለ በረራዎ ይጠይቁ',
    'THE PEOPLE BEHIND THE JOURNEYS':'ከጉዞዎቹ በስተጀርባ ያሉ ሰዎች', 'Travel is personal.':'ጉዞ የግል ነው።', 'So are the stories.':'ታሪኮቹም እንዲሁ ናቸው።', 'Client stories supplied by ANAN TRAVEL.':'በANAN TRAVEL የቀረቡ የደንበኞች ታሪኮች።',
    'A FEW THINGS TO KNOW':'ማወቅ ያለብዎት ጥቂት ነገሮች', 'Before':'ከመሄድዎ በፊት', 'you set off.':'ይውጡ።', 'Still have a question? We’re here.':'አሁንም ጥያቄ አለዎት? እዚህ ነን።', 'Talk to our team':'ከቡድናችን ጋር ይነጋገሩ',
    'Can I pay in Ethiopian Birr?':'በኢትዮጵያ ብር መክፈል እችላለሁ?', 'How does booking work?':'ምዝገባው እንዴት ይሰራል?', 'Can you guarantee a visa or appointment?':'ቪዛ ወይም ቀጠሮ ማረጋገጥ ትችላላችሁ?', 'What is included in the Umrah package?':'በኡምራ ጥቅሉ ውስጥ ምን ተካትቷል?', 'How long will my visa take?':'ቪዛዬ ምን ያህል ጊዜ ይወስዳል?', 'Do I need to visit your office?':'ቢሮዎን መጎብኘት አለብኝ?',
    'Yes. Our team can arrange flights, hotels and travel packages with payment in Ethiopian Birr. Your written quote will confirm the amount, available payment methods and terms before you commit.':'አዎ። ቡድናችን በኢትዮጵያ ብር ክፍያ በረራዎችን፣ ሆቴሎችን እና የጉዞ ጥቅሎችን ማዘጋጀት ይችላል። የጽሑፍ ጥቅስዎ ከመወሰንዎ በፊት መጠኑን፣ የሚገኙ የክፍያ መንገዶችን እና ውሎችን ያረጋግጣል።',
    'Send your destination, dates and preferences through WhatsApp, or visit our office. We will review availability and prepare a quote. Your enquiry does not charge you or confirm a booking.':'መድረሻዎን፣ ቀኖችዎን እና ምርጫዎን በWhatsApp ይላኩ ወይም ቢሯችንን ይጎብኙ። ተገኝነትን እንመረምር እና ጥቅስ እናዘጋጃለን። ጥያቄዎ ክፍያ አያስከፍልዎትም ወይም ምዝገባን አያረጋግጥም።',
    'Visa decisions and appointment availability are controlled by the relevant authorities. We help you understand the process, prepare documentation and review the next steps if an application is refused.':'የቪዛ ውሳኔዎች እና የቀጠሮ ተገኝነት በሚመለከታቸው ባለሥልጣናት ይወሰናሉ። ሂደቱን እንዲረዱ፣ ሰነዶችን እንዲያዘጋጁ እና ማመልከቻ ከተከለከለ ቀጣዩን ደረጃ እንዲመለከቱ እንረዳዎታለን።',
    'The supplied package includes return flights, visa and insurance, accommodation near the Haram, group transport and guidance. Meals and personal expenses are separate unless your written quote includes them.':'የቀረበው ጥቅል የመመለሻ በረራዎችን፣ ቪዛ እና ኢንሹራንስን፣ ከሐረም አጠገብ ማረፊያን፣ የቡድን መጓጓዣን እና መመሪያን ያካትታል። ምግብ እና የግል ወጪዎች የጽሑፍ ጥቅስዎ ካልጨመራቸው ለየት ናቸው።',
    'Processing depends on the destination, application and appointment availability. Ask our team to review the current requirements for your trip before making non-refundable arrangements.':'የሂደት ጊዜው በመድረሻው፣ በማመልከቻው እና በቀጠሮ ተገኝነት ይወሰናል። የማይመለስ ዝግጅት ከማድረግዎ በፊት ቡድናችንን የአሁኑን መስፈርቶች እንዲመረምር ይጠይቁ።',
    'You can begin on WhatsApp at +251 924 093 037. You are also welcome at Garad Building, Welo Sefer, Addis Ababa, Monday–Friday 8:30 AM–6:00 PM or Saturday 9:00 AM–3:00 PM.':'በ +251 924 093 037 WhatsApp ላይ መጀመር ይችላሉ። እንዲሁም በጋራድ ህንፃ፣ ወሎ ሰፈር፣ አዲስ አበባ እንኳን ደህና መጡ፤ ሰኞ–ዓርብ 8:30 AM–6:00 PM ወይም ቅዳሜ 9:00 AM–3:00 PM።',
  },
  om: {
    'Skip to content':'Gara qabiyyee ijoo darbii', 'Language for introduction and booking':'Afaan seensaafi qabsiisaaf', 'Main navigation':'Geessituu ijoo', 'Mobile navigation':'Geessituu moobaayilaa',
    'Plan your journey':'Imala kee qopheessi', 'Close navigation':'Geessituu cufi', 'Open navigation':'Geessituu bani', 'Our services':'Tajaajiloota keenya', 'Experiences':'Muuxannoowwan', 'About ANAN TRAVEL':'Waa’ee ANAN TRAVEL', 'Help & FAQ':'Gargaarsa & FAQ', 'Contact':'Nu qunnami',
    'Services':'Tajaajiloota', 'Book':'Qabadhaa', 'Manage':'Bulchi', 'Experience':'Muuxannoo', 'Help':'Gargaarsa',
    'ADDIS ABABA. THE WORLD. YOUR WAY.':'ADDIS ABABA. ADDUNYAA. AKKAATAA KEETIIN.', 'The world is waiting.':'Addunyaan si eeggataa jirti.', 'Make it yours.':'Kan kee godhi.',
    'Extraordinary places. Meaningful journeys. From your first question to your flight home, we take care of the details.':'Bakkeewwan ajaa’ibaa. Imala hiika qabu. Gaaffii kee isa jalqabaa irraa hanga balalii deebii keetti, bal’ina hunda ni kunuunsina.',
    'Find your next journey':'Imala kee itti aanu argadhu', 'Explore our experiences':'Muuxannoo keenya daawwadhu', 'YOUR PATHWAY TO EXPLORATION':'DAANDII KEE GARA DAWWANNAA', 'Rooted in Addis Ababa. Connected to the world.':'Hundeen keenya Addis Ababa keessa. Addunyaa waliin wal qunnamaa jirra.', 'SCROLL TO DISCOVER ↓':'Gadi siqii daawwadhu ↓',
    'LET’S BEGIN':'HAA JALQABNU', 'Where will you go next?':'Itti aansee eessa deemta?', 'Tell us your plans. We’ll take it from here.':'Karoora kee nutti himi. As irraa kaasnee ni qindeessina.', 'Enquiry type':'Gosa gaaffii', 'Flights':'Balali’oota', 'Visa services':'Tajaajila viizaa', 'Holidays':'Boqonnaa',
    'From':'Ka’umsa', 'Your name':'Maqaa kee', 'Where do you want to go?':'Eessa deemuu barbaadda?', 'Full name':'Maqaa guutuu', 'Select your destination':'Bakka geessituu filadhu', 'Travel date':'Guyyaa imalaa', 'Phone Number':'Lakkoofsa bilbilaa', 'Request a quote':'Gatii gaafadhu',
    'Opens WhatsApp with your details. Send your message there to start your enquiry. No payment required.':'Bal’ina kee waliin WhatsApp bana. Gaaffii kee jalqabuuf ergaa kee achitti ergi. Kaffaltiin hin barbaachisu.', 'Your enquiry is ready in WhatsApp. Please send it there.':'Gaaffiin kee WhatsApp irratti qophaa’eera. Maaloo achitti ergi.', 'open our chat':'Haasawa keenya bani', 'or call':'yookaan bilbili',
    'PERSONAL SERVICE.':'TAJAAJILA DHUUNFAA.', 'EVERY STEP OF THE WAY.':'TARKAANFII HUNDA KEESSATTI.', 'Addis Ababa based':'Addis Ababa keessa hundaa’e', 'Pay locally in ETB':'ETB’n naannoo keessatti kaffali', 'Domestic & international':'Biyya keessaa & idil-addunyaa', 'A real person to help':'Nama dhugaa si gargaaru',
    'THOUGHTFULLY ARRANGED':'QORATAMEE QINDEEFFAME', 'More possibilities.':'Carraawwan dabalataa.', 'Less to worry about.':'Yaaddoo xiqqaa.', 'A pilgrimage. A new beginning. A well-earned escape.':'Ziyaaraa. Jalqaba haaraa. Boqonnaa hojii irraa argame.', 'Whatever takes you there, we help make the journey feel effortless.':'Wanti si geessu maal iyyuu haa ta’u, imalli salphaa akka sitti dhaga’amu ni gargaara.',
    'THE WORLD, WITHIN REACH':'ADDUNYAA, QAQQABAMAA', 'TRAVEL WITH PURPOSE':'KAAYYOO WALIIN IMALI', 'CLARITY AT EVERY STEP':'IFTOOMINA TARKAANFII HUNDAA', 'PREPARED, NOT OVERWHELMED':'QOPHAA’E, HIN RAKKATIN', 'A NEW CHAPTER':'BOQONNAA HAARAA', 'FOLLOW YOUR CURIOSITY':'FEDHII BARUU KEESSAN HORDOFI',
    'Flights & hotels':'Balaliiwwan & hoteelota', 'Domestic and international flights, considered connections and somewhere special to stay. Arrange your journey locally in Ethiopian Birr.':'Balalii biyya keessaa fi idil-addunyaa, walqunnamtii sirriitti filatame fi bakka addaa itti boqottu. Imala kee naannoo keessatti Birrii Itoophiyaatiin qopheessi.',
    'Umrah journeys':'Imala Umraa', 'A meaningful journey, thoughtfully arranged. Visa assistance, flights, Makkah and Madinah accommodation, and dedicated group support.':'Imala hiika qabu, sirriitti qophaa’e. Gargaarsa viizaa, balalii, qubannaa Makkaa fi Madiinaa, akkasumas deeggarsa garee addaa.',
    'Visa assistance':'Gargaarsa viizaa', 'Clear guidance for tourist, business and student visa applications, with a careful review of your documentation.':'Qajeelfama ifaa viizaa daawwannaa, daldalaa fi barattootaa, sanadoota keetis of-eeggannoon ni ilaalla.',
    'Embassy appointments':'Beellama embasii', 'Help navigating appointment portals and preparing for US, UK and Schengen interviews. Availability and decisions remain with the embassy.':'Poortaala beellamaa keessa akka deemtu fi gaaffii fi deebii US, UK fi Schengenf qophaa’uuf ni gargaara. Argamni fi murtiin embasii bira jira.',
    'Study abroad':'Barnoota biyya alaa', 'From university applications to student visa preparation, personal guidance for opportunities in Europe, Asia, the USA and Canada.':'Iyyata yunivarsiitii irraa hanga viizaa barattootaa qopheessuutti, carraa Awurooppaa, Eeshiyaa, USA fi Kanaadaa irratti qajeelfama dhuunfaa.',
    'Tailor-made holidays':'Boqonnaa fedhii keetiin qophaa’e', 'Discover Lalibela, Gondar, Aksum, the Simien Mountains and the Omo Valley, with a journey shaped around your interests and pace.':'Lalibela, Gondar, Aksum, Tulluuwwan Simien fi Sulula Omoo daawwadhu; imalli fedhii fi saffisa keetiin qophaa’a.',
    'Let’s talk':'Haa haasofnu', 'JOURNEYS WORTH TAKING':'IMALA GOCHUUN WORTH', 'Some places stay':'Bakkeewwan tokko tokko si waliin turu', 'with you.':'si waliin.', 'Three ways to begin your next chapter.':'Boqonnaa kee itti aanu jalqabuuf karaa sadii.', 'Every package can start with a conversation.':'Paakeejii hundi haasawa irraa jalqaba.',
    'A journey of devotion':'Imala ibaadaa', 'A different kind of skyline':'Mul’ata magaalaa adda ta’e', 'Discover a new perspective':'Ilaalcha haaraa argadhu', 'UMRAH · 14 DAYS':'UMRAA · GUYYAA 14', 'CITY ESCAPE · FLIGHT + VISA':'BOQONNAA MAGAALAA · BALALII + VIIZAA', 'SAUDI ARABIA · 7 NIGHTS':'SAUDI ARABIA · HALKAN 7',
    'Return flight from Addis Ababa':'Balalii deebii Addis Ababa irraa', 'Umrah visa & insurance':'Viizaa Umraa & inshuraansii', 'Hotel near the Haram':'Hoteela Haram bira', 'Group transport & guidance':'Geejjiba garee & qajeelfama', 'Tourist visa assistance':'Gargaarsa viizaa daawwannaa', 'Airport transfer':'Geejjiba buufata xiyyaaraa', 'Optional hotel arrangements':'Qophii hoteela filannoo', 'Seven nights’ accommodation':'Qubannaa halkanii torba', 'Local support & SIM card':'Deeggarsa naannoo & kaardii SIM', 'Indicative price from':'Gatiin tilmaamaa irraa',
    'Guide prices from the supplied package list, per person. Availability, inclusions and current pricing are confirmed in your written quote.':'Gatiin qajeelcha tarree paakeejii kenname irraa, nama tokkoof. Argamni, wantoonni keessa jiran fi gatiin ammaa qaama barreeffamaa keessatti ni mirkanaa’u.',
    'A LOCAL TEAM. A PERSONAL CONNECTION.':'GAREE NAANNOO. WALQUNNAMTII DHUUNFAA.', 'Your journey.':'Imala kee.', 'Our':'Kan keenya', 'attention':'xiyyeeffannoo', 'to detail.':'bal’inaaf.', 'Meet us in Addis Ababa':'Addis Ababa keessatti nu qunnami', 'Good travel begins with someone who listens.':'Imalli gaariin nama si dhaggeeffatu waliin jalqaba.',
    'International bookings, unfamiliar paperwork and foreign currency payments can feel complicated. Our team helps you navigate the process locally, so you can focus on what lies ahead.':'Qabsiisa idil-addunyaa, hojii waraqaa hin beekamne fi kaffaltii maallaqa biyya alaa walxaxaa fakkaachuu danda’u. Gareen keenya adeemsa sana naannoo keessatti akka hordoftu si gargaara.',
    'Personal, from the start':'Jalqaba irraa kaasee dhuunfaa', 'Plans built around your purpose, preferences and budget.':'Karoora kaayyoo, filannoo fi baajata keetiin qophaa’e.', 'Clarity before commitment':'Murtee dura iftoomina', 'Written quotes and a conversation about what is included.':'Gatii barreeffamaa fi haasawa waa’ee wantoota keessa jiran.',
    'ALREADY PLANNING YOUR DEPARTURE?':'BA’UU KEE DURSEE KAROORSITAA?', 'A little reassurance':'Mirkaneessa xiqqoo', 'goes a long way.':'baay’ee gargaara.', 'Need to check your flight, discuss baggage or change your plans? Share your flight number and travel date with our team for assistance.':'Balalii kee mirkaneessuu, waa’ee baagii mari’achuu yookaan karoora jijjiiruu barbaaddaa? Gargaarsaaf lakkoofsa balalii fi guyyaa imalaa garee keenyaaf qoodi.', 'Ask about your flight':'Waa’ee balalii kee gaafadhu',
    'THE PEOPLE BEHIND THE JOURNEYS':'NAMOOTA IMALA DUUBA JIRAN', 'Travel is personal.':'Imalli dhuunfaadha.', 'So are the stories.':'Seenaa isaaniis akkasuma.', 'Client stories supplied by ANAN TRAVEL.':'Seenaa maamiltootaa ANAN TRAVEL irraa dhiyaate.', 'A FEW THINGS TO KNOW':'WANTOOTA XIQQOO BEEKUU QABDU', 'Before':'DURA', 'you set off.':'BAATU.', 'Still have a question? We’re here.':'Ammas gaaffii qabdaa? As jirra.', 'Talk to our team':'Garee keenya waliin haasayi',
    'Can I pay in Ethiopian Birr?':'Birrii Itoophiyaatiin kaffaluu nan danda’aa?', 'How does booking work?':'Qabsiisni akkamitti hojjeta?', 'Can you guarantee a visa or appointment?':'Viizaa yookaan beellama mirkaneessuu dandeessu?', 'What is included in the Umrah package?':'Paakeejii Umraa keessatti maaltu jira?', 'How long will my visa take?':'Viizaan koo yeroo hammamii fudhata?', 'Do I need to visit your office?':'Waajjira keessan dhufuu qabaa?'
  }
};

const attrs = ['placeholder', 'aria-label', 'title'];
const preserve = ['ANAN TRAVEL', 'Addis Ababa', 'Makkah', 'Madinah', 'Dubai', 'United Arab Emirates', 'Riyadh', 'Saudi Arabia', 'Lalibela', 'Gondar', 'Aksum', 'Simien Mountains', 'Omo Valley', 'WhatsApp', 'ETB', 'SIM', 'US', 'UK', 'Schengen'];

function translateString(value: string, dict: Dict): string {
  const exact = dict[value.trim()];
  if (exact) return exact;
  let result = value;
  const masks: string[] = [];
  preserve.forEach((term, i) => {
    if (!result.includes(term)) return;
    const marker = `__KEEP_${i}__`;
    masks[i] = term;
    result = result.split(term).join(marker);
  });
  const entries = Object.entries(dict).sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of entries) {
    if (result === source) return target;
    result = result.split(source).join(target);
  }
  masks.forEach((term, i) => { result = result.split(`__KEEP_${i}__`).join(term); });
  return result;
}

function translateNode(node: Node, dict: Dict) {
  if (node.nodeType === Node.TEXT_NODE) {
    const value = node.nodeValue ?? '';
    if (value.trim()) node.nodeValue = translateString(value, dict);
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const el = node as HTMLElement;
  if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'OPTION' && el.parentElement?.closest('select')?.classList.contains('language')) return;
  attrs.forEach((attr) => {
    const current = el.getAttribute(attr);
    if (current) el.setAttribute(attr, translateString(current, dict));
  });
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const texts: Node[] = [];
  let current: Node | null;
  while ((current = walker.nextNode())) texts.push(current);
  texts.forEach((text) => {
    const value = text.nodeValue ?? '';
    if (value.trim()) text.nodeValue = translateString(value, dict);
  });
}

export default function FullPageTranslator() {
  useEffect(() => {
    const select = document.querySelector<HTMLSelectElement>('.language select');
    if (!select) return;

    let lang: Lang = (select.value as Lang) || 'en';
    const root = document.body;
    let translating = false;

    const run = () => {
      if (translating) return;
      translating = true;
      if (lang !== 'en') translateNode(root, phraseDict[lang]);
      translating = false;
    };

    const onChange = () => {
      lang = (select.value as Lang) || 'en';
      if (lang !== 'en') run();
    };

    const observer = new MutationObserver(() => {
      if (lang !== 'en') run();
    });
    observer.observe(root, { childList: true, subtree: true });
    select.addEventListener('change', onChange);
    run();
    return () => { select.removeEventListener('change', onChange); observer.disconnect(); };
  }, []);

  return null;
}
