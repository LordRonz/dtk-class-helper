/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Footer from '@/components/Footer';
import ArrowLink from '@/components/links/ArrowLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='min-h-screen py-16 space-y-10 text-primary-50 layout'>
            <div className='space-y-4'>
              <h1 className='text-primary-200'>Ingfo</h1>
              <p>
                Situs ini {'"'}terinspirasi{'"'} dari punyanya informatika, buatannya si{' '}
                <CustomLink href='https://theodorusclarence.com'>Clarence</CustomLink>. Nih{' '}
                <CustomLink href='https://class.thcl.dev/'>linknya</CustomLink>
              </p>
              <p>Kalau ada bug atau saran fitur bisa PR ke repo berikut:</p>
              <ArrowLink href='https://github.com/lordronz/dtk-class-helper'>Source code</ArrowLink>
              <p>Atau pm aja sih ya</p>
              <h4>Data matkul</h4>
              <ArrowLink href='/api/matkul' openNewTab={true}>
                Link API JSON
              </ArrowLink>
            </div>
            <div className='flex justify-center items-center'>
              <ArrowLink href='/' className='text-primary-200' direction='left'>
                Balik ke Home
              </ArrowLink>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
