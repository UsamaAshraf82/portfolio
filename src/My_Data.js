import { Marooze, YBits } from './images/ImageLibrary'

const My_Data = {
  name: 'Muhammad Usama Ashraf',
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
    {
      app_name: 'Marooze',
      img: Marooze,
      description:
        'A Platform for Fashion Community. Models, Photographer, Makeup Artist, Hairstylist, Content Creator, Agency. Made using ReactJS, Typescript ,Sass , Redux',
      status: 'Under Development',
      link: 'http://www.marooze.com',
    },
    {
      app_name: 'Y-Bits',
      img: YBits,
      description: 'Say hello to secure file sharing',
      status: 'Live',
      link: 'https://ybits.io/info',
    },
  ],
  skills: [
    { skill: 'HTML', value: 100 },
    { skill: 'CSS (SCSS)', value: 100 },
    { skill: 'JAVASCRIPT', value: 90 },
    { skill: 'REACT', value: 90 },
    { skill: 'NODE-JS (EXPRESS)', value: 40 },
    { skill: 'MONGODB', value: 40 },
    { skill: 'SQL', value: 40 },
    { skill: 'PHOTOSHOP', value: 25 },
  ],
}

export default My_Data
