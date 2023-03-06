import { InfoContext } from '@/pages/_app';
import { useContext } from 'react';

const Navbar = () => {
  const info = useContext(InfoContext);

  return (
    <div className='navbar fixed z-50  bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
          >
            {info.sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`}>{section}</a>
              </li>
            ))}
            <li>
              <a target='_blank' href='/Resume.pdf' rel='noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </div>
        <a href='' className='btn btn-ghost text-xl normal-case text-accent'>
          {info.name}
        </a>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          {info.sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
