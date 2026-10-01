import { Education } from '../types/portfolio';

export const educationData: Education[] = [
  {
    institution: "Princess Margaret Secondary School",
    image: '/images/international/canada-exchange.webp',
    imageAlt: {
      en: 'Victor Emanuel sitting on a rock overlooking the Canadian landscape during his 2026 exchange',
      pt: 'Victor Emanuel sentado em uma rocha, observando a paisagem canadense durante o intercâmbio de 2026'
    },
    durationMonths: 6,
    course: {
      en: "International High School Exchange",
      pt: "Intercâmbio Internacional de Ensino Médio"
    },
    degree: {
      en: "International Exchange",
      pt: "Intercâmbio Internacional"
    },
    startDate: "2026",
    endDate: "2026",
    description: {
      en: "I lived and studied in Penticton, British Columbia, for six months through Ganhando o Mundo. Attending a Canadian high school in an English-speaking environment introduced me to a different education system and strengthened my communication, independence and adaptability.",
      pt: "Morei e estudei em Penticton, British Columbia, durante seis meses pelo programa Ganhando o Mundo. A rotina em uma escola canadense, em um ambiente de língua inglesa, me apresentou a um sistema educacional diferente e fortaleceu minha comunicação, independência e adaptabilidade."
    }
  }
];
