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
        "bg-bg-card border border-border-custom rounded-xl p-6 transition-all duration-200",
        hoverEffect && "hover:shadow-md hover:border-text-secondary/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
