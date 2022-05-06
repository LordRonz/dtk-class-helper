/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Contact from '@/components/Contact';
import Comment from '@/components/content/Comment';
import ArrowLink from '@/components/links/ArrowLink';
import CustomLink from '@/components/links/CustomLink';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

const Ingfo: NextPage = () => {
  return (
    <>
      <Seo templateTitle='Ingfo' />
      <Nav />
      <main>
        <section className=''>
          <div className='layout min-h-screen space-y-10 py-16'>
            <div className='space-y-10'>
              <div className='space-y-4'>
                <h1 className='text-primary-200'>Ingfo</h1>
                <p>
                  Situs ini {'"'}terinspirasi{'"'} dari punyanya informatika,
                  buatannya si{' '}
                  <CustomLink href='https://theodorusclarence.com'>
                    Clarence
                  </CustomLink>
                  . Nih{' '}
                  <CustomLink href='https://class.thcl.dev/'>
                    linknya
                  </CustomLink>
                </p>
                <p>
                  Kalau ada bug atau saran fitur bisa bikin issue atau kalo bisa
                  PR ke repo berikut:
                </p>
                <ArrowLink href='https://github.com/lordronz/dtk-class-helper'>
                  Source code
                </ArrowLink>
                <p>
                  Bisa jg lewat{' '}
                  <CustomLink href='#comment-section'>
                    comment section
                  </CustomLink>{' '}
                  yg ada disini atau di{' '}
                  <CustomLink href='/#comment-section'>Home</CustomLink>
                </p>
                <p>Atau pm aja sih ya, buat yg kenal</p>
                <p>
                  Karena yang buat ini juga manusia, bisa aja salah, mungkin
                  salah typo/bug lain. Kalo saran fitur jg sangat boleh. Atau
                  mungkin mau komplen soal styling jg ga masalah. Misal warnanya
                  dark bgt nih, merah semua nih, atau ga keliatan fontnya atau
                  kekecilan fontnya atau ada saran font jg sangat diperbolehkan.
                </p>
              </div>
              <div className='space-y-4'>
                <h4>Data matkul</h4>
                <ArrowLink href='/api/matkul' openNewTab>
                  Link API JSON
                </ArrowLink>
              </div>
              <div className='space-y-4'>
                <h4>Kontak</h4>
                <Contact />
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <ArrowLink href='/' className='text-primary-200' direction='left'>
                Balik ke Home
              </ArrowLink>
            </div>
            <div id='comment-section'>
              <Comment />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ingfo;
