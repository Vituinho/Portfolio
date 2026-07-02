import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="p-4 rounded-full bg-accent-custom/5 text-accent-custom border border-accent-custom/10 animate-bounce">
        <HelpCircle className="w-8 h-8" />
      </span>
      
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-sm text-text-secondary max-w-sm">
          The page you are looking for doesn&apos;t exist or has been moved to another location.
        </p>
      </div>

      <Link href="/" passHref legacyBehavior>
        <Button className="gap-2 cursor-pointer">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
