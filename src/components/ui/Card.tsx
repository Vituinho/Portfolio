'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export default function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card border border-border-custom rounded-xl p-6 glow-effect transition-all duration-300",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1 hover:border-accent-custom/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
