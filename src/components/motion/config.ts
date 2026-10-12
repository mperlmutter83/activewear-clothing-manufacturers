/*
  ╔════════════════════════════════════════════════════════════════════════╗
  ║  EDIT ME — every word of homepage copy and every brand color for the   ║
  ║  scroll-motion homepage lives here. You never need to touch engine.ts  ║
  ║  or motion.css. HTML is allowed in title strings (<br>, <em>).         ║
  ╚════════════════════════════════════════════════════════════════════════╝
*/

export const SITE = {
  /* ── COLORS ─────────────────────────────────────────────────────────── */
  colors: {
    primary: '#f2542d', // brand coral (the site's "Get a Quote" buttons): CTAs, tint
    onPrimary: '#ffffff', // text on primary buttons
    accent: '#127475', // brand teal: eyebrows, numbers, highlights
    ink: '#eef4f8', // light sky-white: page background / frosted glass base
    text: '#0e0c19', // brand navy: main text
    muted: '#45435a', // secondary text
  },

  /* ── CINEMATIC LOOK (0 = off) ───────────────────────────────────────── */
  look: {
    theme: 'light', // "light" (frosted white glass, navy text) or "dark"
    tintStrength: 0.12, // brand-primary color wash over the film (0 to 0.6)
    tintBlend: 'soft-light', // "soft-light" (subtle), "color" (strong recolor), "overlay"
    vignette: 0.22, // edge darkening (0 to 1)
    grain: 0.06, // film grain opacity (0 to 0.2)
  },

  /* ── FONTS (the site's next/font variables from app/layout.tsx) ─────── */
  fonts: {
    display: "var(--font-abril), Georgia, 'Times New Roman', serif",
    body: 'var(--font-poppins), Helvetica, Arial, sans-serif',
    emphasis: 'normal', // <em> in headings: "normal" (accent color only) or "italic"
  },

  /* ── BUSINESS ───────────────────────────────────────────────────────── */
  brand: {
    name: 'Activewear Clothing Manufacturers',
    logoFull: '/images/logo.png', // full logo on the loading screen
    phone: '(310) 499-2160',
    phoneHref: 'tel:+13104992160',
    ctaUrl: '/contact-us',
  },

  loader: 'Loading the film',

  /* ── HERO ───────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Premium Activewear Solutions Tailored for Your Brand',
    title: 'Custom Activewear<br><em>Manufacturing</em>',
    sub: 'We design, develop, and manufacture high-quality activewear with flexible minimums and quick delivery times.',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'See How It’s Built',
    ctaSecondaryHref: '#anatomy',
    caption: 'Scroll to take the set apart, seam by seam, and watch it go back together.',
    scrollCue: 'Scroll to deconstruct',
  },

  /* ── ABOUT ──────────────────────────────────────────────────────────── */
  about: {
    eyebrow: 'About Us',
    title: 'From concept<br>to production.',
    body: [
      'We specialize in designing, developing, and manufacturing high-quality activewear with flexible minimums and quick delivery times.',
      'Share your vision with us, collaborate with our team on detailed designs and samples, and once approved we move to full-scale production, with high-quality standards at every stage.',
    ],
    stats: [
      { value: 'Low', label: 'Minimum orders, built for startups' },
      { value: '3', label: 'Steps: idea, design & sampling, production' },
      { value: '8', label: 'Manufacturing services, concept to delivery' },
    ],
  },

  /* ── ANATOMY (shown while the set hangs fully deconstructed) ────────── */
  anatomy: {
    eyebrow: 'Anatomy of the Set',
    title: 'Every piece,<br><em>engineered.</em>',
    groups: [
      {
        label: 'Sports bra',
        parts: [
          { name: 'Stretch-knit shell panels', desc: 'Front, side and back panels cut to move with the body and hold their shape.' },
          { name: 'Contrast bound edges', desc: 'Binding folded over the neckline, armholes and underband for a clean, chafe-free finish.' },
          { name: 'Anchored straps', desc: 'Straps reinforced where they meet the body, the points that take the most strain.' },
        ],
      },
      {
        label: 'Running shorts',
        parts: [
          { name: 'Covered elastic waistband', desc: 'Elastic encased in fabric so it sits flat and holds without digging in.' },
          { name: 'Curved split hems', desc: 'Side seams that open into a curved split for a full running stride.' },
          { name: 'Perforated mesh vents', desc: 'Breathable mesh bands set into the hems to move air where heat builds.' },
        ],
      },
    ],
  },

  /* ── SERVICES ───────────────────────────────────────────────────────── */
  services: {
    eyebrow: 'Services',
    title: 'Comprehensive manufacturing services.',
    intro: 'Everything you need to take an activewear line from sketch to shelf.',
    items: [
      { name: 'Custom Activewear Manufacturing', desc: 'Tailored solutions for creating unique activewear pieces that align with your brand’s vision.' },
      { name: 'Private Label Production', desc: 'Build your brand with high-quality, custom-branded apparel.' },
      { name: 'Product Design & Tech Packs', desc: 'From concept sketches to detailed tech packs, complete design support for your products.' },
      { name: 'Fabric Sourcing', desc: 'A wide range of premium fabrics so your activewear is both stylish and functional.' },
      { name: 'Sampling & Prototyping', desc: 'Prototypes to perfect your designs before moving to full-scale production.' },
      { name: 'Bulk Production & Scaling', desc: 'Scale your production with streamlined bulk manufacturing processes.' },
      { name: 'Quality Assurance', desc: 'Rigorous quality checks so every piece meets the highest standards.' },
      { name: 'Logistics & Delivery', desc: 'Reliable, timely delivery to get your products to market swiftly.' },
    ],
    moreTitle: '',
    more: [] as { name: string; href: string }[],
  },

  /* ── CALL TO ACTION ─────────────────────────────────────────────────── */
  cta: {
    eyebrow: 'Get Started Today',
    title: 'Ready to build your line?',
    body: 'Share your vision with us, and we’ll help you bring it to life with our expert guidance and support.',
    primary: 'Get a Quote',
    secondaryPrefix: 'or call',
  },
};

/* ═══════════════════════ END OF EDITABLE SECTION ═══════════════════════ */

export type SiteConfig = typeof SITE;
