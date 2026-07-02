'use client';

import React, { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error reporter services
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="p-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
        <AlertTriangle className="w-8 h-8" />
      </span>
      
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-text-secondary max-w-sm">
          An error occurred while loading this page. Please try again or refresh your browser.
        </p>
      </div>

      <Button
        onClick={() => reset()}
        className="gap-2 cursor-pointer"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </Button>
    </div>
  );
}
