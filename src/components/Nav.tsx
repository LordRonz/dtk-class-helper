import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/ingfo', label: 'Ingfo' },
  { href: '/credits', label: 'Credits' },
];

const Nav = (): JSX.Element => {
  return (
    <nav className='bg-gray-800'>
      <ul className='flex items-center justify-between px-8 py-4'>
        <li>
          <ul className='flex items-center justify-between space-x-8'>
            <li>
              <Link href='/'>
                <a className='font-bold text-white hover:text-primary-300 transition-all duration-200'>Home</a>
              </Link>
            </li>
            <li>
              <UnstyledLink
                className='font-bold text-white hover:text-primary-300 transition-all duration-200 text-xl'
                href='https://github.com/lordronz/dtk-class-helper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <SiGithub />
              </UnstyledLink>
            </li>
          </ul>
        </li>
        <li>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='text-white hover:text-primary-300 transition-all duration-200'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
