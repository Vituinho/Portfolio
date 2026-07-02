import { BookItem } from '../types/portfolio';

export const booksData: BookItem[] = [
  {
    cover: "/images/books/the-pragmatic-programmer.jpg",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    genre: {
      en: "Software Development / Best Practices",
      pt: "Desenvolvimento de Software / Boas Práticas"
    },
    pages: 200,
    status: "reading",
    rating: 5,
    startedDate: "2026-03-17",
    favoriteQuote: {
      en: "Care about your craft.",
      pt: "Importe-se com o seu ofício."
    },
    personalNotes: {
      en: "Currently on page 200. This book has been helping me develop a more professional mindset toward software engineering, emphasizing problem-solving, code quality, and continuous learning.",
      pt: "Atualmente na página 200. Este livro tem me ajudado a desenvolver uma mentalidade mais profissional em engenharia de software, enfatizando resolução de problemas, qualidade de código e aprendizado contínuo."
    }
  }
];