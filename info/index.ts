import hrdoc from '@/public/24hrdoc.png';
import beiteck from '@/public/beiteck.png';
import happiness from '@/public/happiness.png';
import profile from '@/public/profile.jpg';
import textiletrendz from '@/public/textiletrendz.png';

const info = {
  name: 'Usama Ashraf',
  headshot: profile,

  contact: [
    {
      service: 'linkedIn',
      link: 'https://www.linkedin.com/in/muhammad-usama-ashraf-029574128/',
    },
    { service: 'email', link: 'mailto:usamaashraf82@live.com' },
    {
      service: 'whatsapp',
      link: 'https://api.whatsapp.com/send/?phone=923346117844',
    },
  ],

  // github: 'https://github.com/UsamaAshraf82',

  summary: `I am a Programmer, Developer, Software Engineer From Pakistan 🇵🇰 and Working as a Full Time Freelancer.

  Ever since I can remember, I have been interested in technology, and would constantly be on the computer tinkering, and reading about the latest and greatest gadgets. After getting my first computer at age 8, I was hooked. My path as a geek was set. With my interest in games, and how they work, I started to learn and grow as a programmer.
  It would be my honor to help make technology work for you!`,

  sections: ['About', 'Projects', 'Contact'],
  featuredProjects: [
    {
      name: 'BeiTeck',
      summary:
        'All Inclusive platform to Rent and Buy homes for buyers, sellets , tenants and homeowners',
      image: beiteck,
      link: 'https://www.beiteck.com/',
      technologies: [
        'React',
        'Redux Saga',
        'CanvasJS',
        'Parse Server',
        'Parse Sockets',
        'React Bootstrap',
      ],
    },
    {
      name: 'Textile Trendz',
      summary:
        'Textile Trendz is place to learn about news and trends of Texilte. Information published by qualified Textile experts.',
      image: textiletrendz,
      link: 'https://www.textiletrendz.com',
      technologies: ['React', 'NextJS', 'TailwindCSS','Cloundinary Image Optimization','Sanity'
    ],
    },
    {
      name: '24Hr Doc',
      summary:
        'A revolutionary healthcare online product that offers affordable healthcare facilities within the reach of your palm. Our product features the following cutting-edge features.',
      image: hrdoc,
      link: 'https://www.24hrdoc.com',
      technologies: [
        'NextJS',
        'React',
        'Parse Server',
        'MongoDB',
        'React Bootstrap',
      ],
    },
    {
      name: 'My Happiness Meter',
      summary: `Each of us has a built-in emotional meter. It's standard equipment at birth. The visual below represents that emotional feedback system we all have inside of us. We call it your Happiness Meter®. Using it to stay in touch with your emotions can improve your decision making and increase the joy in your life.`,
      image: happiness,

      link: 'https://myhappinessmeter.com',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
    },
  ],
  otherProjects: [],
};

export default info;
