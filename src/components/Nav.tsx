import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/apidocs', label: 'API' },
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
                <a className='font-bold text-white transition-all duration-200 hover:text-primary-300'>Home</a>
              </Link>
            </li>
            <li>
              <UnstyledLink
                className='text-xl font-bold text-white transition-all duration-200 hover:text-primary-300'
                href='https://github.com/lordronz/dtk-class-helper'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub Repo'
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
                <UnstyledLink href={href} className='text-white transition-all duration-200 hover:text-primary-300'>
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
