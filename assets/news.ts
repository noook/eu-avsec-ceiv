import FASAG from '@/assets/img/news/FASAG.jpg';
import ILA from '@/assets/img/news/ILA.jpg';
import LBA from '@/assets/img/news/LBA.jpg';
import LCERPA from '@/assets/img/news/LCERPA.jpg';
import ATRS from '@/assets/img/news/atrs.jpg';
import IATACARGO from '@/assets/img/news/iata-cargo.jpg';
import LUFTHANSACARGO from '@/assets/img/news/lufthansa-cargo.jpg';
import UECOMMISSION from '@/assets/img/news/ue-commission.jpg';

export interface NewsEntry {
  period: Date;
  name: {
    [locale: string]: string;
  };
  title: {
    [locale: string]: string;
  };
  desc: {
    [locale: string]: string;
  };
  illustration?: {
    src: string;
    alt: string;
  };
  readMore?: string;
  links?: {
    text: string;
    link: string;
  }[];
}

export default [
  {
    period: new Date(2018, 11 - 1),
    name: {
      fr: 'Bruxelles, 23 Nov 2018',
      en: 'Brussels, 23 Nov 2018',
    },
    title: {
      fr: 'Groupe de travail sur les Validations UE à la Commission Européenne',
      en: 'Workshop on EU Aviation Security Validation at the EU Commission',
    },
    desc: {
      fr: 'Bryan RICHTER à participé au quatrième groupe de travail sur les Validations EU de Sûreté Aérienne qui s\'est déroulée à la Commission Européenne à Bruxelles le 23 Octobre 2018',
      en: 'Bryan RICHTER attended the fourth Workshop on EU Aviation Security Validation that took place in Brussels, Belgium, October 23rd 2018',
    },
    illustration: {
      src: UECOMMISSION,
      alt: 'UE Commission',
    },
  },
  {
    period: new Date(2016, 10 - 1),
    name: {
      fr: 'Bruxelles, 17-18 Oct 2016',
      en: 'Brussels, 17-18 Oct 2016',
    },
    title: {
      fr: 'Groupe de travail sur les Validations UE à la Commission Européenne',
      en: 'Workshop on EU Aviation Security Validation at the EU Commission',
    },
    desc: {
      fr: 'Bryan RICHTER à participé au troisième groupe de travail sur les Validations EU de Sûreté Aérienne qui s\'est déroulée à la Commission Européenne à Bruxelles les 17 et 18 Octobre 2016',
      en: 'Bryan RICHTER attended the third Workshop on EU Aviation Security Validation that took place in Brussels, Belgium, 17 - 18 October 2016',
    },
    illustration: {
      src: UECOMMISSION,
      alt: 'UE Commission',
    },
  },
  {
    period: new Date(2014, 7 - 1),
    name: {
      fr: 'Bordeaux, 17-20 Jul 2014',
      en: 'Bordeaux, 17-20 Jul 2014',
    },
    title: {
      fr: '2014 ATRS World Conference',
      en: '2014 ATRS World Conference',
    },
    desc: {
      fr: 'Bryan RICHTER est une des personnes invitées par le Air Transport Research Society à la 2014 ATRS World conference qui s\'est tenue à la Kedge Business School à Bordeaux, France, 17-20 Juil 2014. Il a présenté la théorie et la pratique des validations EU de sûreté Aériennes et la réglementation UE.',
      en: 'Bryan RICHTER is one of the speakers invited by the Air Transport Research Society at the 2014 ATRS World conference that was held in Kedge Business School in Bordeaux, France, 17-20 Jul 2014. He presented the theory and practice of EU AVSEC regulations and validations.',
    },
    illustration: {
      src: ATRS,
      alt: 'ATRS',
    },
    readMore: 'https://www.atrsworld.org/conferences.html',
  },
  {
    period: new Date(2014, 5 - 1),
    name: {
      fr: 'Berlin, 20 Mai 2014',
      en: 'Berlin, 20 Mai 2014',
    },
    title: {
      fr: 'DEKRA Aviation days au ILA Berlin Air Show, Allemagne',
      en: 'DEKRA Aviation days at ILA Berlin Air Show, Germany',
    },
    desc: {
      fr: 'Petra BECKER est une des personnes invitées par DEKRA Aviation au ILA Berlin Air Show le 20 Mai 2014. Elle a présenté les aspects opérationnels et légaux des validations ACC3 et RA3',
      en: 'Petra BECKER is one of the speakers invited by DEKRA Aviation at the ILA Berlin Air Show on the 20th May 2014. She will be presenting the operational and legal aspects of ACC3 and RA3 validations.',
    },
    illustration: {
      src: ILA,
      alt: 'ILA',
    },
    readMore: 'https://www.ila-berlin.de/en?id_nr=11&tmp=4',
  },
  {
    period: new Date(2014, 5 - 1),
    name: {
      fr: 'Toronto, 08-09 Mai 2014',
      en: 'Toronto, 08-09 May 2014',
    },
    title: {
      fr: 'International Aviation Security Symposium, Toronto, Canada',
      en: 'International Aviation Security Symposium, Toronto, Canada',
    },
    desc: {
      fr: 'Bryan RICHTER est une des personnes invitées par le Laurier Centre for Economic Research and Policy Analysis (LCERPA) les 8 & 9 Mai 2014 à Toronto, Canada. Il a présenté la théorie et la pratique des validations EU de sûreté Aériennes et la réglementation UE',
      en: 'Bryan RICHTER was one of the speakers invited by the Laurier Centre for Economic Research and Policy Analysis (LCERPA) 8th & 9th May 2014 in Toronto, Canada. He presented the theory and practice of EU AVSEC regulations and validations.',
    },
    illustration: {
      src: LCERPA,
      alt: 'LCERPA',
    },
    readMore: 'http://www.lcerpa.org/isas/',
  },
  {
    period: new Date(2014, 4 - 1),
    name: {
      fr: 'Berlin, 16 Avril 2014',
      en: 'Berlin, April 16th 2014',
    },
    title: {
      fr: 'Petra BECKER rejoint la FASAG à Berlin, Allemagne',
      en: 'Petra BECKER joins the FASAG in Berlin, Germany',
    },
    desc: {
      fr: 'Petra BECKER est la co-fondatrice et membre de la Federal Aviation Security Association of Germany (FASAG) à Berlin.',
      en: 'Petra BECKER is the co-founder and member of the Federal Aviation Security Association of Germany (FASAG) in Berlin.',
    },
    illustration: {
      src: FASAG,
      alt: 'FASAG',
    },
    readMore: 'https://www.fasag.org/de/der-vorstand',
  },
  {
    period: new Date(2014, 4 - 1),
    name: {
      fr: 'Frankfort, 01 Avril 2014',
      en: 'Frankfort, April 1st 2014',
    },
    title: {
      fr: 'Lufthansa Cargo Security Conference',
      en: 'Lufthansa Cargo Security Conference',
    },
    desc: {
      fr: 'Petra BECKER a participé à la Lufthansa Cargo Security Conference qui s\'est tenue à la Commerzbank Arena à Frankfort, Allemagne, le 1er Avril, 2014 dont le sujet était: Security 2020: Recognising risk - Forming alliances.',
      en: 'Petra BECKER attended the Lufthansa Cargo Security Conference which took place at Commerzbank Arena in Frankfurt, Germany, on April 1, 2014 and which was held under the title : Security 2020: Recognising risk - Forming alliances.',
    },
    illustration: {
      src: LUFTHANSACARGO,
      alt: 'Lufthansa Cargo',
    },
  },
  {
    period: new Date(2014, 1 - 1),
    name: {
      fr: 'Bruxelles, 09 Janvier 2014',
      en: 'Brussels, January 9th 2014',
    },
    title: {
      fr: 'Groupe de travail sur les Validations UE à la Commission Européenne',
      en: 'Workshop on EU Aviation Security Validation at the EU Commission',
    },
    desc: {
      fr: 'Bryan RICHTER à aussi participé au deuxième groupe de travail sur les Validations EU de Sûreté Aérienne qui s\'est déroulée à la Commission Européenne à Bruxelles le 09 Janvier 2014.',
      en: 'Bryan RICHTER attended the second Workshop on EU Aviation Security Validation that took place in Brussels, Belgium, 09th January 2014.',
    },
    illustration: {
      src: UECOMMISSION,
      alt: 'UE Commission',
    },
  },
  {
    period: new Date(2013, 12 - 1),
    name: {
      fr: 'Bruxelles, 19 Décembre 2013',
      en: 'Brussels, December 19th 2013',
    },
    title: {
      fr: 'Groupe de travail sur les Validations UE à la Commission Européenne',
      en: 'Workshop on EU Aviation Security Validation at the EU Commission',
    },
    desc: {
      fr: 'Les quatre membres de notre association ont été invités par la Commission Européenne pour participer au groupe de travail sur les Validations EU de Sûreté Aérienne qui s\'est déroulée à Bruxelles le 19 Décembre 2013.',
      en: 'All four members of our group have been invited by the European Commission to participate to the Workshop on EU Aviation Security Validation which took place in Brussels, Belgium, 19th December 2013.',
    },
    illustration: {
      src: UECOMMISSION,
      alt: 'UE Commission',
    },
  },
  {
    period: new Date(2013, 11 - 1),
    name: {
      fr: 'Limerick, 19-20 Novembre 2013',
      en: 'Limerick, 19-20 November 2013',
    },
    title: {
      fr: '3ème IATA Cargo & MAil Supply Chain Security Forum',
      en: '3rd IATA Cargo & Mail Supply Chain Security Forum',
    },
    desc: {
      fr: 'Bryan RICHTER a participé au 3ème IATA Cargo & MAil Supply Chain Security Forum qui s\'est déroulé au Strand Hotel à Limerick en Irlande, les 19 et 20 Novembre 2013.',
      en: 'Bryan RICHTER attended the 3rd IATA Cargo & Mail Supply Chain Security Forum that took place on 19 – 20 November 2013 at the Strand Hotel,  Limerick, Ireland.',
    },
    illustration: {
      src: IATACARGO,
      alt: 'Iata Cargo',
    },
    readMore: 'https://www.iata.org/events/Documents/security-forum2013-agenda.pdf',
  },
  {
    period: new Date(2013, 10 - 1),
    name: {
      fr: 'Berlin, 30 Octobre 2013',
      en: 'Berlin, October 30th 2013',
    },
    title: {
      fr: 'Réunion des Validateurs UE à l\'Aviation Civile Allemande (LBA)  à Berlin',
      en: 'EU AVSEC Validators meeting at the LBA in Berlin',
    },
    desc: {
      fr: 'Petra BECKER et Bryan RICHTER ont été invités par la l\'Aviation Civile Fédérale Allemande, la LBA pour participer à la réunion des validateurs UE de sûreté aérienne au Ministère Fédéral des Transports à Berlin en Allemagne. A la demande de la LBA, Petra à fait une présentation sur l\'ACC3.',
      en: 'Petra BECKER and Bryan RICHTER attended the EU AVSEC Validators meeting at the Federal Ministry of Transport in Berlin in Germany where they have been invited by the LBA, the German Civil Aviation Authority. Petra was kindly invited by the LBA to make a presentation on the ACC3.',
    },
    illustration: {
      src: LBA,
      alt: 'LBA',
    },
  },
  {
    period: new Date(2013, 10 - 1),
    name: {
      fr: '07 Octobre 2013',
      en: 'October 7th 2013',
    },
    title: {
      fr: 'Formulaire en ligne gratuit de pré-validation ACC3 et RA3',
      en: 'Free on-line pre-validation surveys for ACC3 and RA3',
    },
    desc: {
      fr: 'Nous proposons en-ligne, gratuitement, des formulaires de pré-validation pour nos clients ACC3 et RA3 qui souhaitent évaluer leur niveau de préparation et de conformité avec les exigences des réglements Européens. Veuillez cliquer sur les liens ci-dessous pour commencer votre évaluation:',
      en: 'We offer free on-line pre-validation surveys for ACC3 and RA3 customers who wish to check their readiness and compliance to the EU regulations. Click on the following links below to start your survey:',
    },
    links: [
      { text: 'ACC3 Survey', link: 'https://docs.google.com/a/eu-avsec-ceiv.org/forms/d/e/1FAIpQLScJ8Dnsh0H3OE6AbXcyJkFM30kpWSHy2tnN84XcETtpIh-fQw/viewform' },
      { text: 'RA3 Survey', link: 'https://docs.google.com/a/eu-avsec-ceiv.org/forms/d/e/1FAIpQLSdrzXWQfPvYzwC6t5995JgKpiLerJ-VyTUsbaGXzDauhbQuhg/viewform' },
    ],
  },
] as NewsEntry[];
