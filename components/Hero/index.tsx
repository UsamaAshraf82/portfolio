import Image from 'next/image';
import { useContext } from 'react';
import { InfoContext } from '../../pages/_app';

const Hero = () => {
  const info = useContext(InfoContext);
  return (
    <>
      <div
        id='About'
        className='hero z-0 min-h-screen bg-base-200  px-4 lg:px-24 xl:px-44'
      >
        <div className='hero bg-base-200 '>
          <div className='hero-content mb-12 flex-col items-center gap-4 lg:mt-28 lg:flex-row-reverse'>
            <Image
              alt='headshot'
              src={info.headshot}
              className='mt-16 w-9/12 rounded-lg object-contain sm:w-7/12  md:w-4/12 lg:mt-0'
            />
            <div>
              <h1 className='text-5xl font-bold text-accent'>
                Hi, I&apos;m {info.name}
              </h1>
              <p className='whitespace-pre-line py-6'>{info.summary}</p>
              <a href='#Contact' className='btn-primary btn'>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
