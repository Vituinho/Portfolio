import type { CSSProperties } from 'react';
import { lineFor, lineVar } from '@/lib/stack';
import { techIcons } from '@/lib/techIcons';
import TechLogo from './TechLogo';

export default function TechTag({ name }: { name: string }) {
  return (
    <li className="tech-tag gap-1.5">
      {techIcons[name]
        ? <TechLogo name={name} className="size-3.5 shrink-0 text-text-primary/80" />
        : <span aria-hidden="true" className="line-dot size-1.5" style={{ '--dot': lineVar(lineFor(name)) } as CSSProperties} />}
      {name}
    </li>
  );
}
