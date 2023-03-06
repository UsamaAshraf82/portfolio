import { useContext } from 'react';
import { InfoContext } from '../../pages/_app';

const Contact = () => {
  const info = useContext(InfoContext);

  return (
    <div className='mt-12 bg-base-200'>
      <h2
        id='Contact'
        className=' flex justify-center pt-12 text-4xl font-bold '
      >
        Contact Me
      </h2>
      <p className=' p-6 text-center'>Feel free to contact me on!</p>
      <div className='btn-group flex justify-center pb-12'>
        {info.contact.map((ser) => (
          <a
            key={ser.link}
            rel='noreferrer'
            target='_blank'
            href={ser.link}
            className='btn'
          >
            {ser.service}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
