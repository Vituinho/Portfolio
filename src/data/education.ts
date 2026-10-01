import { Education } from '../types/portfolio';

export const educationData: Education[] = [
  {
    institution: "Princess Margaret Secondary School",
    image: '/images/international/canada-exchange-collage.png',
    imageAlt: {
      en: 'Canada exchange collage showing landscapes, school life, friendships and host family moments.',
      pt: 'Colagem do intercâmbio no Canadá com momentos de paisagens, escola, amizades e família anfitriã.'
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
