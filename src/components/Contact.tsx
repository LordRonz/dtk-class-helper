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
    link: 'https://lr-link.vercel.app/github',
    icon: <SiGithub className='transition-all duration-300 hover:text-primary-300' />,
  },
  {
    label: 'GitLab',
    link: 'https://lr-link.vercel.app/gitlab',
    icon: <SiGitlab className='transition-all duration-300 hover:text-primary-300' />,
  },
  {
    label: 'LinkedIn',
    link: 'https://lr-link.vercel.app/linkedin',
    icon: <SiLinkedin className='transition-all duration-300 hover:text-primary-300' />,
  },
] as const;

const Contact = (): JSX.Element => {
  const [copyStatus, setCopyStatus] = useState<string>('Click to copy');

  return (
    <div className='flex flex-1 flex-row items-center gap-x-10' id='contact'>
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
            <span className='border-thin inline-flex flex-col items-center rounded-md bg-dark p-2 shadow-md'>
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
                  <FiMail className='transition-all duration-300 hover:text-primary-300' />
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
