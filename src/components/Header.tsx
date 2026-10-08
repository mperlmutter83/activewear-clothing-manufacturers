'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PHONE_DISPLAY = '(310) 499-2160';
const PHONE_HREF = 'tel:+13104992160';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_1px_0_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" aria-label="Activewear Clothing Manufacturers" className="py-1">
          <Image
            src="/images/logo.png"
            alt="Activewear Clothing Manufacturers"
            width={52}
            height={52}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy/70 text-sm font-sans font-medium hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-teal text-white text-sm font-sans font-semibold px-4 py-2 rounded-full hover:bg-navy transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Mobile: call button + hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 bg-teal text-white text-sm font-sans font-semibold px-3 py-2 rounded-full"
            aria-label={`Call us at ${PHONE_DISPLAY}`}
          >
            <PhoneIcon className="w-4 h-4" />
            Call
          </a>
          <button
            className="text-navy p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-navy/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-navy/80 text-sm font-sans py-3 border-b border-navy/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-teal text-white text-sm font-sans font-semibold px-4 py-3 rounded-full"
          >
            <PhoneIcon className="w-4 h-4" />
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
}
