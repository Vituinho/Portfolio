import type { CSSProperties } from 'react';
import { lineFor, lineVar } from '@/lib/stack';

export default function TechTag({ name }: { name: string }) {
  return (
    <li className="tech-tag gap-1.5">
      <span aria-hidden="true" className="line-dot size-1.5" style={{ '--dot': lineVar(lineFor(name)) } as CSSProperties} />
      {name}
    </li>
  );
}
