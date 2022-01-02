import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

const mail = 'christopher.19072@mhs.its.ac.id';

const socials = [
  {
    label: 'GitHub',
    link: 'https://github.com/LordRonz',
    icon: <SiGithub className='text-primary-50 transition-all duration-300 hover:text-primary-300' />,
  },
  {
    label: 'GitLab',
    link: 'https://gitlab.com/lordronz',
    icon: <SiGitlab className='text-primary-50 transition-all duration-300 hover:text-primary-300' />,
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aaronchristopher69/',
    icon: <SiLinkedin className='text-primary-50 transition-all duration-300 hover:text-primary-300' />,
  },
] as const;

const Contact = (): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState('Click to copy');

  return (
    <div className='flex flex-row flex-1 items-center gap-x-10' id='contact'>
      {socials.map(({ label, link, icon }) => (
        <div key={label}>
          <UnstyledLink href={link} openNewTab={true} aria-label={label}>
            <IconContext.Provider value={{ size: '2em', style: { cursor: 'pointer' } }}>{icon}</IconContext.Provider>
          </UnstyledLink>
        </div>
      ))}
      <div>
        <Tippy
          animation='scale-subtle'
          interactive
          hideOnClick={false}
          content={
            <span className='inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin'>
              {copyStatus}
              <span className='inline-block font-bold text-primary-300'>{mail}</span>
            </span>
          }
        >
          <div>
            <CopyToClipboard
              text={mail}
              onCopy={() => {
                setCopyStatus('Copied to clipboard 😳');
                setTimeout(() => setCopyStatus('Click to copy'), 1469);
              }}
            >
              <span>
                <IconContext.Provider value={{ size: '2.3em', style: { cursor: 'pointer' } }}>
                  <FiMail className='text-primary-50 transition-all duration-300 hover:text-primary-300' />
                </IconContext.Provider>
              </span>
            </CopyToClipboard>
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default Contact;
