'use client';

import React from 'react';
import { useI18n } from '@/i18n/context';
import { booksData } from '@/data/books';
import Card from '../ui/Card';
import { Book, Star, Quote, FileText, CheckCircle2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Books() {
  const { locale, t } = useI18n();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'reading':
        return (
          <span className="bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
            <Bookmark className="w-3 h-3" />
            {t.books.status.reading}
          </span>
        );
      case 'finished':
        return (
          <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {t.books.status.finished}
          </span>
        );
      case 'want-to-read':
      default:
        return (
          <span className="bg-zinc-500/10 text-text-secondary border border-zinc-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1">
            <Book className="w-3 h-3" />
            {t.books.status['want-to-read']}
          </span>
        );
    }
  };

  return (
    <section id="books" className="py-20 px-4 max-w-6xl mx-auto border-t border-border-custom/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-text-primary mb-12 relative pb-3 border-b border-border-custom max-w-max">
          {t.books.title}
        </h2>

        {/* Bookshelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="flex flex-col h-full overflow-hidden p-0">
                {/* Book Cover Container */}
                <div className="relative aspect-[4/3] bg-bg-secondary border-b border-border-custom/40 select-none overflow-hidden group">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 z-20">
                    {getStatusBadge(book.status)}
                  </div>
                </div>

                {/* Body Content Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-base text-text-primary mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  
                  <p className="text-xs text-text-secondary mb-3">
                    {book.author}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-text-secondary mb-4">
                    <span>{t.books.genre}: <span className="font-semibold text-text-primary">{book.genre[locale]}</span></span>
                    <span>&bull;</span>
                    <span>{book.pages} {t.books.pages}</span>
                  </div>

                  {/* Rating display */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < book.rating 
                            ? "fill-amber-400 text-amber-400" 
                            : "text-border-custom"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote Expansion */}
                  {book.favoriteQuote && (
                    <div className="bg-bg-secondary/60 border border-border-custom/40 rounded-lg p-3 mb-4 text-xs italic text-text-secondary relative pl-7">
                      <Quote className="w-3.5 h-3.5 text-accent-custom/20 absolute left-2.5 top-3" />
                      &ldquo;{book.favoriteQuote[locale]}&rdquo;
                    </div>
                  )}

                  {/* Personal Notes */}
                  {book.personalNotes && (
                    <div className="text-left mt-auto pt-3 border-t border-border-custom/40">
                      <h4 className="text-xs font-bold text-text-primary mb-1 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-accent-custom/60" />
                        {t.books.notes}:
                      </h4>
                      <p className="text-[11px] text-text-secondary leading-relaxed">
                        {book.personalNotes[locale]}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
