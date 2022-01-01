/* eslint-disable @next/next/no-img-element */
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Tippy from '@tippyjs/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '@/components/buttons/Button';
import Footer from '@/components/Footer';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import type { DataMatkul } from '@/data/dataMatkul';
import dataMatkul from '@/data/dataMatkul';

const filterData = (semester: string) => dataMatkul.filter((datum) => datum.sem === semester);

const Home: NextPage = () => {
  const [semester, setSemester] = useState<string>('6');
  const [matkul, setMatkul] = useState<DataMatkul | undefined>();
  const [kelas, setKelas] = useState<string>('A');

  const [copyStatus, setCopyStatus] = useState('Click to copy');

  const [filteredData, setFilteredData] = useState<DataMatkul[]>(filterData(semester));

  const handleMatkul = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMatkul(dataMatkul.find((datum) => datum.kode === e.target.value));
  };

  const handleSemester = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(e.target.value);
  };

  useEffect(() => {
    const tempFilteredData = filterData(semester);
    setMatkul(tempFilteredData[0]);
    setFilteredData(tempFilteredData);
  }, [semester]);

  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='min-h-screen py-16 space-y-10 text-primary-50 layout'>
            <div className='space-y-4'>
              <h1 className='text-primary-200'>Daftar kelas Teknik Komputer ITS</h1>
              <CustomLink href='/ingfo' className='text-primary-300'>
                Ingfo
              </CustomLink>
              <h2>Langkah-langkah</h2>
            </div>
            <div className='space-y-4'>
              <h3>1. Login Sistem Informasi Akademik ITS (SIAKAD)</h3>
              <p>
                Dibuka sampai keliatan laman SIAKAD.{' '}
                <CustomLink href='/ssanintegra.png' openNewTab={true}>
                  Contoh tampilan seperti ini
                </CustomLink>
              </p>
              <ArrowLink className='text-primary-100' href='https://akademik.its.ac.id/myitsauth.php'>
                Buka My ITS
              </ArrowLink>
            </div>
            <div className='space-y-4'>
              <h3>2. Pilih semester</h3>
              <p>Semester 1 sama 2 ga banyak soalnya paketan.</p>
              <select
                name='select'
                className='py-2 pl-4 pr-8 border border-primary-500 rounded-lg focus:border-primary-400 focus:ring-primary-400 bg-black'
                value={semester}
                onChange={handleSemester}
              >
                {[...new Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>3. Pilih Matkul</h3>
              <select
                name='select'
                className='max-w-xs py-2 pl-4 pr-8 border border-primary-500 rounded-lg focus:border-primary-400 focus:ring-primary-400 bg-black'
                value={matkul?.kode}
                onChange={handleMatkul}
              >
                {filteredData.map((item) => (
                  <option key={item.kode} value={item.kode}>
                    {item.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>4. Kelas</h3>
              <select
                name='select'
                className='py-2 pl-4 pr-8 border border-primary-500 rounded-lg focus:border-primary-400 focus:ring-primary-400 bg-black'
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
              >
                {'ABCDEFG'.split('').map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-4'>
              <h3>5. Buka link daftar kelas</h3>
              <p className='text-gray-300 !mt-2'>
                https://akademik.its.ac.id/lv_peserta.php
                <br />
                ?mkJur=
                <span className='text-primary-400'>{matkul?.mkjur}</span>
                <br />
                {'&'}
                mkID=
                <span className='text-primary-400'>{matkul?.kode}</span>
                <br />
                {'&'}
                mkSem=1{'&'}mkThn=2021
                <br />
                {'&'}
                mkKelas=
                <span className='text-primary-400'>{kelas.toUpperCase()}</span>
              </p>

              <ButtonLink
                variant='outline'
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                  matkul?.kode
                }&mkSem=1&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
              >
                Buka Daftar Kelas
              </ButtonLink>
              <span className='ml-4'>
                <Tippy
                  animation='scale-subtle'
                  hideOnClick={false}
                  content={
                    <span className='inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin'>
                      {copyStatus}
                    </span>
                  }
                >
                  <span>
                    <CopyToClipboard
                      text={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                        matkul?.kode
                      }&mkSem=1&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
                      onCopy={() => {
                        setCopyStatus('Copied to clipboard 😳');
                        setTimeout(() => setCopyStatus('Click to copy'), 1469);
                      }}
                    >
                      <Button>Copy</Button>
                    </CopyToClipboard>
                  </span>
                </Tippy>
              </span>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
