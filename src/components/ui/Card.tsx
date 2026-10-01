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
        "bg-bg-card border border-border-custom rounded-xl p-5 sm:p-6 transition-[border-color,box-shadow] duration-200",
        hoverEffect && "hover:shadow-sm hover:border-text-secondary/50 focus-within:border-text-secondary/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
