import {
  Marooze,
  YBits,
  Avatar,
  HappinessMeter,
  BeiTeck,
} from './images/ImageLibrary'

const My_Data = {
  name: 'Muhammad Usama Ashraf',
  avatar: Avatar,
  intro:
    '<p>Ever since I can remember, I have been interested in technology, and would constantly be on the computer tinkering, and reading about the latest and greatest gadgets. After getting my first computer at age 8, I was hooked. My path as a geek was set. With my interest in games, and how they work, I started to learn and grow as a programmer. It would be my honor to help make technology work for you!</p><p style="text-align: center;">Stack-Overflow Presence<br><a href="https://stackoverflow.com/users/5894166/muhammad-usama-ashraf" style="border:0;"><img src="https://stackoverflow.com/users/flair/5894166.png?theme=dark" width="208" height="58" alt="profile for Muhammad Usama Ashraf at Stack Overflow, Q&A for professional and enthusiast programmers" title="profile for Muhammad Usama Ashraf at Stack Overflow, Q&A for professional and enthusiast programmers" class="fr-fic fr-dii"></a></p><h3><strong>Always Learning</strong></h3><p><strong>Once a Student always a Students</strong></p>',
  who: [
    'Software Engineer',
    'Front-End Developer',
    'Freelancer',
    'Computer Geek',
  ],
  social: {
    facebook: 'usamaashraf82',
    twitter: 'usamaashraf82',
    instagram: 'usamaashraf82',
    github: 'usamaashraf82',
    linkedin: 'usamaashraf82',
    whatsapp: '+923130732539',
  },
  works: [
    // {
    //   app_name: 'Marooze',
    //   img: Marooze,
    //   description:
    //     'A Platform for Fashion Community. Models, Photographer, Makeup Artist, Hairstylist, Content Creator, Agency.',
    //   status: 'Under Development',
    //   work: 'Frontend, Backend, From Scratch',
    //   link: 'http://www.marooze.com',
    // },
    {
      app_name: 'BeiTeck',
      img: BeiTeck,
      description: 'A Rental Marketplace used based in Lebanon.',
      status: 'Live, Beta Only for Brokers',
      work: 'Frontend, Backend, From Scratch',
      link: 'https://beiteck.com',
    },
    {
      app_name: 'Y-Bits',
      img: YBits,
      description: 'Say hello to secure file sharing',
      status: 'Live',
      work: 'Update UI',
      link: 'https://ybits.io/info',
    },
    {
      app_name: 'Happiness Meter',
      img: HappinessMeter,
      description:
        'Making the world a happier place, one happier person at a time.',
      status: 'Live',
      work: 'Update UI',
      link: 'https://myhappinessmeter.com',
    },
  ],
  skills: [
    { skill: 'HTML', value: 100 },
    { skill: 'CSS (SCSS)', value: 100 },
    { skill: 'JavaScript', value: 100 },
    { skill: 'React', value: 95 },
    { skill: 'NODE-JS (EXPRESS)', value: 90 },
    { skill: 'mongoDB', value: 90 },
    { skill: 'SQL', value: 30 },
    { skill: 'Adobo Photoshop', value: 30 },
    { skill: 'Adobe XD', value: 50 },
  ],
}

export default My_Data
