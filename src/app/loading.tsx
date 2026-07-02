import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-4">
      {/* Visual Spinner Ring */}
      <div className="w-10 h-10 border-4 border-accent-custom/25 border-t-accent-custom rounded-full animate-spin" />
      <p className="text-xs font-semibold text-text-secondary animate-pulse tracking-wide">
        Loading...
      </p>
    </div>
  );
}
