import Image from 'next/image';
import Link from 'next/link';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
  /** 'light' = white-gradient over photo (homepage style), 'dark' = dark gradient over photo, 'solid' = navy band */
  variant?: 'light' | 'dark' | 'solid';
  bgImage?: string;
  compact?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtext,
  ctaText,
  ctaHref,
  variant = 'dark',
  bgImage = '/images/hero.jpg',
  compact = false,
}: PageHeroProps) {
  if (variant === 'solid') {
    return (
      <section className={`bg-navy text-center ${compact ? 'py-20 md:py-28' : 'py-28 md:py-40'}`}>
        <div className="max-w-4xl mx-auto px-4">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6">{title}</h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="btn-coral">
              {ctaText}
            </Link>
          )}
        </div>
      </section>
    );
  }

  const light = variant === 'light';
  return (
    <section className={`relative flex items-center justify-center ${compact ? 'py-24 md:py-32' : 'py-32 md:py-44'}`}>
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="object-cover -z-10"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: light
            ? 'linear-gradient(148deg, #ffffff 30%, rgba(255,255,255,0.86) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className={`${light ? 'text-navy' : 'text-white'} text-4xl md:text-6xl leading-tight mb-6`}>
          {title}
        </h1>
        <p className={`${light ? 'text-ink/80' : 'text-white/90'} text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto`}>
          {subtext}
        </p>
        {ctaText && ctaHref && (
          <Link href={ctaHref} className={light ? 'btn-coral' : 'btn-white'}>
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
