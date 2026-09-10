# Anan Travel

A responsive Next.js App Router rebuild of the supplied Anan Travel HTML website. React components replace inline scripts; all styling is compiled locally, with no Tailwind CDN dependency. Original contact details, destination catalogue, package guide prices, supplied client stories and core services are retained.

## Run

Node.js 20.9+ required.

```sh
npm ci
npm run dev
npm run build
npm start
```

## Deploy on Vercel

Import `Mahiruni/Anantravel`, select **Next.js**, use the repository root, and leave the output directory at its framework default. Build command: `npm run build`. No environment variables are needed. If an existing Vercel project has static-HTML overrides, clear those overrides and select Next.js before redeploying.

## Production behavior and editorial review

- Enquiry forms validate required fields and open the supplied company WhatsApp number with the enquiry. Visitors must send the message in WhatsApp. The site does not claim an enquiry was received or a payment was made.
- The source HTML's simulated NDC connection, invented flight statuses, fixed “live” exchange rates, payment success alert and nonworking newsletter form have been replaced with honest enquiry/support links. Real flight, ticketing, payments and newsletter integrations are not connected.
- ETB prices are guide prices from the supplied file, explicitly subject to a current written quote. Confirm them before launch. Client stories are supplied marketing copy and should be verified with client permission before publication.
- The supplied partial English, Amharic and Afaan Oromo introduction/booking translations are retained. Other content remains English; this is not a full multilingual site.
- Photographs are downloaded from the image URLs in the supplied attachment, served locally, and optimized by Next.js. The unrelated residential image labeled as Riyadh in the source was replaced with aviation photography. Confirm usage rights before publication. Font loading uses Google Fonts with robust local fallbacks.
- No unsupported airline affiliation, guaranteed visa result, automatic flight alert, checkout, or live rate claims are made.

## Structure

`app/`: App Router entry point, metadata and responsive design system.

`components/`: React website, supplied destination catalogue and partial translations.

`public/images/`: Optimized-delivery source photography.
