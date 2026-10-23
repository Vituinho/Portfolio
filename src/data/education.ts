import { Education } from '../types/portfolio';

const exchangePhotos = '/images/international/exchange';

export const educationData: Education[] = [
  {
    institution: "Princess Margaret Secondary School",
    image: '/images/international/canada-exchange-collage.png',
    imageAlt: {
      en: 'Canada exchange collage showing landscapes, school life, friendships and host family moments.',
      pt: 'Colagem do intercâmbio no Canadá com momentos de paisagens, escola, amizades e família anfitriã.'
    },
    program: 'Ganhando o Mundo',
    period: { en: 'January – June 2026', pt: 'Janeiro – junho de 2026' },
    location: { en: 'Penticton, British Columbia, Canada', pt: 'Penticton, Colúmbia Britânica, Canadá' },
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
    },
    // Real photographs from the exchange (source/canada-exchange-presentation.pdf). The first is the featured one.
    gallery: [
      {
        src: `${exchangePhotos}/mountain-viewpoint.webp`, width: 1080, height: 1440, focus: '50% 45%',
        alt: { en: 'Victor sitting on a rock ledge, looking out over a forested mountain valley', pt: 'Victor sentado em uma rocha, olhando para um vale de montanhas cobertas de pinheiros' }
      },
      {
        src: `${exchangePhotos}/classroom-laptop.webp`, width: 1200, height: 1600, focus: '50% 70%',
        alt: { en: 'Writing code on a laptop in a Canadian high school classroom', pt: 'Programando em um notebook em uma sala de aula de uma escola canadense' }
      },
      {
        src: `${exchangePhotos}/lake-sunset.webp`, width: 1200, height: 1600, focus: '50% 55%',
        alt: { en: 'Sunset over a lake framed by hills and pine trees', pt: 'Pôr do sol sobre um lago, entre colinas e pinheiros' }
      },
      {
        src: `${exchangePhotos}/snowboarding.webp`, width: 960, height: 1280, focus: '50% 60%',
        alt: { en: 'Victor sitting in the snow with a snowboard, facing the mountains', pt: 'Victor sentado na neve com uma prancha de snowboard, de frente para as montanhas' }
      },
      {
        src: `${exchangePhotos}/host-family.webp`, width: 840, height: 1120,
        alt: { en: 'Victor with his host family in their backyard', pt: 'Victor com a família anfitriã no quintal de casa' }
      },
      {
        src: `${exchangePhotos}/exchange-students.webp`, width: 514, height: 421,
        alt: { en: 'Group photo with other international students outdoors', pt: 'Foto em grupo com outros estudantes internacionais ao ar livre' }
      },
      {
        src: `${exchangePhotos}/snowy-valley.webp`, width: 1120, height: 840,
        alt: { en: 'A snow-covered valley under a cloudy sky', pt: 'Um vale coberto de neve sob um céu nublado' }
      },
      {
        src: `${exchangePhotos}/lake-viewpoint.webp`, width: 640, height: 480,
        alt: { en: 'A group of students at a lookout above a large lake', pt: 'Um grupo de estudantes em um mirante acima de um grande lago' }
      },
      {
        src: '/images/international/canada-exchange-collage.png', width: 1672, height: 941,
        alt: { en: 'Canada exchange collage showing landscapes, school life, friendships and host family moments', pt: 'Colagem do intercâmbio no Canadá com momentos de paisagens, escola, amizades e família anfitriã' }
      }
    ]
  }
];
