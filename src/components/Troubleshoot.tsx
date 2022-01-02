import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import * as React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';

import ArrowLink from './links/ArrowLink';
import CustomLink from './links/CustomLink';

const Troubleshoot = (): JSX.Element => {
  return (
    <Disclosure as='div'>
      <Disclosure.Button className='inline-flex items-center gap-2 text-lg font-bold text-gray-300 md:text-2xl hover:text-primary-200 focus-visible:text-primary-400'>
        <HiQuestionMarkCircle className='flex-shrink-0' /> <span>Troubleshoot ? Klik disini</span>
      </Disclosure.Button>

      <Transition
        enter='transition origin-top duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Disclosure.Panel className='mt-4 space-y-4'>
          <div className='space-y-4'>
            <p className='mb-4'>
              Kalo muncul tulisan {'"'}Maaf anda tidak berhak akses{'"'},
            </p>
            <Image src='/error.png' width='312' height='52' alt='Error: Maaf anda tidak berhak akses' />
          </div>
          <p>
            Artinya km belum terlogin-kan di SIAKAD, login dulu{' '}
            <ArrowLink className='text-primary-100' href='https://akademik.its.ac.id/myitsauth.php'>
              disini
            </ArrowLink>
          </p>
          <div className='space-y-4'>
            <p className='mb-4'>
              Pastiin kalo di{' '}
              <CustomLink href='#step1' className='text-primary-100'>
                Step 1
              </CustomLink>{' '}
              udah masuk sampe SIAKAD nya, bukan sampe{' '}
              <CustomLink href='/dashboardmyits.png' className='text-primary-100' openNewTab={true}>
                dashboard
              </CustomLink>{' '}
              doang
            </p>
            <Image src='/ssanintegra.png' width='1920' height='928' alt='Troubleshoot: harus masuk sampe SIAKAD' />
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default Troubleshoot;
