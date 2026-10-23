'use client';

import { useEffect, useRef, type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryPhoto } from '@/types/portfolio';

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  index: number | null;
  locale: 'en' | 'pt';
  label: string;
  onIndexChange: Dispatch<SetStateAction<number | null>>;
  onClose: () => void;
}

/** Full-screen photo viewer: arrow keys or swipe to move, Escape to close, focus returns to the opener. */
export default function PhotoLightbox({ photos, index, locale, label, onIndexChange, onClose }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const open = index !== null;
  const pt = locale === 'pt';

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, [open]);

  if (index === null) return <dialog ref={dialogRef} hidden />;

  const photo = photos[index];
  // Functional update, so key repeats that land before a re-render still move one photo each.
  const go = (step: number) => onIndexChange(current => current === null ? null : (current + step + photos.length) % photos.length);

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onCancel={e => { e.preventDefault(); onClose(); }}
      onKeyDown={e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      }}
      onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        touchStart.current = null;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-[#050506] p-0 text-[#f5f5f4] backdrop:bg-black/85"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p aria-live="polite" className="text-sm tabular-nums text-white/70">
            <span className="sr-only">{pt ? 'Foto' : 'Photo'} </span>{index + 1} / {photos.length}
          </p>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            aria-label={pt ? 'Fechar galeria' : 'Close gallery'}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <figure className="relative flex min-h-0 flex-1 flex-col px-2 sm:px-20">
          <div key={photo.src} className="lightbox-photo relative min-h-0 flex-1">
            <Image src={photo.src} alt={photo.alt[locale]} fill sizes="100vw" quality={90} loading="eager" className="object-contain" />
          </div>
          <figcaption className="mx-auto max-w-[60ch] px-4 py-4 text-center text-sm leading-relaxed text-white/70">{photo.alt[locale]}</figcaption>
        </figure>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={pt ? 'Foto anterior' : 'Previous photo'}
              className="absolute left-2 top-1/2 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur transition-colors hover:border-white/40 hover:text-white sm:left-6"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={pt ? 'Próxima foto' : 'Next photo'}
              className="absolute right-2 top-1/2 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur transition-colors hover:border-white/40 hover:text-white sm:right-6"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
            </button>
          </>
        )}
      </div>
    </dialog>
  );
}
