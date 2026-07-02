'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/context';
import { contactData } from '@/data/contact';
import { profileData } from '@/data/profile';
import { ArrowUp, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { t } = useI18n();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: contactData.linkedin, label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, url: contactData.github, label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, url: `mailto:${contactData.email}`, label: "Email" },
    { icon: <Phone className="w-5 h-5" />, url: contactData.whatsapp, label: "WhatsApp" }
  ];

  return (
    <footer className="w-full bg-bg-secondary border-t border-border-custom py-12 relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-text-primary text-base">
            {profileData.name}
          </p>
          <p className="text-sm text-text-secondary mt-1">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border-custom bg-bg-primary text-text-secondary hover:text-accent-custom hover:border-accent-custom hover:shadow-sm transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full bg-accent-custom text-bg-primary shadow-lg border border-transparent hover:bg-accent-muted transition-all duration-300 z-40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-custom/50",
          showScrollTop 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "translate-y-4 opacity-0 pointer-events-none"
        )}
        aria-label={t.footer.backToTop}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
