import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
  summary: string;
  image: string | StaticImageData;
  link: string;
  github?: string;
  index: number;
  technologies: string[];
};

const FeaturedProject = ({
  index,
  image,
  summary,
  name,
  link,
  technologies,
}: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleGoToLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      {(index % 2 === 0 && windowWidth > 768) || windowWidth < 768 ? (
        <div className='my-8 mx-6 flex flex-wrap justify-center md:gap-6'>
          <Image
            className='w-full cursor-pointer rounded-2xl object-cover sm:w-6/12 md:w-4/12'
            src={image}
            alt={`A mockup of ${name}`}
            onClick={() => handleGoToLink(link)}
          />
          <div className='flex flex-col justify-around gap-8 rounded-2xl bg-base-300 p-6 shadow-md sm:w-6/12 md:w-6/12 md:gap-2  '>
            <a href={link} target='_blank' rel='noreferrer'>
              <h3 className='stat-value'>{name}</h3>
            </a>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech, i) => {
                return (
                  <div
                    key={i}
                    className={`badge ${badgeColors[i]} p-3 text-xl text-white`}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className='my-4'>{summary}</div>
            <div className='flex gap-2'>
              <a
                className='btn-primary btn w-1/5'
                href={link}
                target='_blank'
                rel='noreferrer'
              >
                Link
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className='my-8 mx-6 flex flex-wrap justify-center md:gap-6'>
          <div className='flex flex-col justify-around gap-8 rounded-2xl bg-base-300 p-6 shadow-md sm:w-6/12 md:w-6/12 md:gap-2  '>
            <a href={link} target='_blank' rel='noreferrer'>
              <h3 className='stat-value'>{name}</h3>
            </a>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech, i) => {
                //let's make the badges different colors to add some pizzazz

                return (
                  <div
                    key={i}
                    className={`badge ${badgeColors[i]} p-3 text-xl text-white`}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className='my-4'>{summary}</div>
            <div className='flex gap-2'>
              <a
                className='btn-primary btn w-1/5'
                href={link}
                target='_blank'
                rel='noreferrer'
              >
                Link
              </a>
            </div>
          </div>
          <Image
            className='w-full cursor-pointer rounded-2xl object-cover sm:w-6/12 md:w-4/12'
            src={image}
            alt={`A mockup of ${name}`}
            onClick={() => handleGoToLink(link)}
          />
        </div>
      )}
    </>
  );
};

export default FeaturedProject;
const badgeColors = [
  'bg-slate-600 border-slate-600',
  'bg-stone-600 border-stone-600',
  'bg-red-600 border-red-600',
  'bg-orange-600 border-orange-600',
  'bg-yellow-600 border-yellow-600',
  'bg-green-600 border-green-600',
  'bg-teal-600 border-teal-600',
  'bg-cyan-600 border-cyan-600',
  'bg-sky-600 border-sky-600',
  'bg-indigo-600 border-indigo-600',
  'bg-purple-600 border-purple-600',
  'bg-rose-600 border-rose-600',
];
