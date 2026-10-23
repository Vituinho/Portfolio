import { Code2, Cloud, Container, Cpu, Database, Server, Workflow, type LucideIcon } from 'lucide-react';
import { techIcons } from '@/lib/techIcons';

const fallbacks: Record<string, LucideIcon> = { Cloud, Code2, Container, Cpu, Database, Server, Workflow };

/** A technology's brand mark, or a neutral icon when it has none. Always decorative: show the name next to it. */
export default function TechLogo({ name, fallback = 'Code2', className = 'size-5' }: { name: string; fallback?: string; className?: string }) {
  const path = techIcons[name];
  if (!path) {
    const Icon = fallbacks[fallback] ?? Code2;
    return <Icon aria-hidden="true" className={className} strokeWidth={1.6} />;
  }
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d={path} />
    </svg>
  );
}
