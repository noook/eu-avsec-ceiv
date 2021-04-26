import BryanRichter from '@/assets/img/team/bryan-richter.jpg';

interface TeamMember {
  name: string;
  picture: string;
  title: string;
  desc: {
    [lang: string]: string;
  };
  languages: string[];
  phone: string;
  email: string;
}

export default [
  {
    name: 'Bryan RICHTER',
    picture: BryanRichter,
    title: 'MBA',
    desc: {
      fr: 'Après un début de carrière dans la grande distribution en France et au Canada, passionné d\'aéronautique, il décide en 1990 de donner un nouveau tournant dans sa carrière pour rejoindre le monde de l\'aviation. Il y a travaillé pour un certain nombre de grandes compagnies aériennes aux opérations passage puis s\'est tourné vers les opérations fret en 1998. Depuis, il a toujours été impliqué dans la sûreté et dans la chaîne d\'approvisionnement sécurisée. Il a obtenu son Aerospace MBA en 2005 à  l\'ESC Toulouse et est titulaire d\'une licence de pilote privé depuis 2003. Il est validateur EU de sûreté aérienne depuis 2013',
      en: 'After a brief career in the FMCG industry, passionate about planes, he decided in 1990 to make a career change towards the aviation world. He worked for several major airlines in passenger operations and shifted to cargo operations in 1998. Since then he has been always involved in the air cargo security supply chain. He received his Aerospace MBA in 2005 from the Toulouse Business School in France, and holds a private pilot licence since 2003. He is an independant EU validator since 2013',
    },
    languages: ['en', 'fr', 'it'],
    phone: '+33698910185',
    email: 'bryan.richter@eu-avsec-ceiv.org',
  },
] as TeamMember[];
