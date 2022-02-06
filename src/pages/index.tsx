/* eslint-disable @next/next/no-img-element */
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Tippy from '@tippyjs/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import type { ThemeConfig } from 'react-select';
import Select from 'react-select';

import Button from '@/components/buttons/Button';
import Comment from '@/components/content/Comment';
import Footer from '@/components/Footer';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';
import Troubleshoot from '@/components/Troubleshoot';
import type { DataMatkul } from '@/data/dataMatkul';
import dataMatkul, { cariMatkul } from '@/data/dataMatkul';

const filterData = (semester: string): DataMatkul[] => dataMatkul.filter((datum) => datum.sem === semester);

const cariMatkulOptions = cariMatkul.map((item) => ({
  label: item.nama,
  value: item.kode,
}));

const s = '6';

const classes = [
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  ...[...new Array(100)].map((_, i) => (i + 1).toString()),
  'M00',
  'MPB',
];
const classesOptions = classes.map((item) => ({
  label: item,
  value: item,
}));

const selectTheme: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#eb2754',
    primary25: '#ff3377',
    primary50: '#fa8072',
    primary75: '#ff3377',
    neutral0: '#000',
    neutral5: '#111',
    neutral10: '#222',
    neutral20: '#992323',
    neutral30: '#443',
    neutral40: '#555',
    neutral50: '#666',
    neutral60: '#888',
    neutral70: '#aaa',
    neutral80: '#ffd1d1',
    neutral90: '#eee',
  },
});

const Home: NextPage = () => {
  const router = useRouter();
  const [semester, setSemester] = useState<string>(s);
  const [matkul, setMatkul] = useState<DataMatkul>(dataMatkul.find((datum) => datum.kode === `EC4${s}01`) ?? dataMatkul[0]);
  const [kelas, setKelas] = useState<string>('A');

  const [copyStatus, setCopyStatus] = useState<string>('Click to copy');

  const [filteredData, setFilteredData] = useState<DataMatkul[]>(filterData(semester));

  const handleMatkul = (newValue: { label: string; value: string } | null) => {
    setMatkul(dataMatkul.find((datum) => datum.kode === newValue?.value) as DataMatkul);
  };

  const handleCariMatkul = (newValue: { label: string; value: string } | null) => {
    if (!newValue) return;
    const { value } = newValue;
    const kode = value;
    const matkul = dataMatkul.find((datum) => datum.kode === kode);
    if (!matkul) return;
    setSemester(matkul.sem);
    setFilteredData(filterData(matkul.sem));
    setMatkul(matkul);
  };

  const handleSemester = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(e.target.value);
    const temp = filterData(e.target.value);
    setFilteredData(temp);
    setMatkul(temp[0]);
  };

  const komi = Math.random() < 0.5;

  const matkulOptions = useMemo(
    () =>
      filteredData.map((item) => ({
        label: item.nama,
        value: item.kode,
      })),
    [filteredData]
  );

  useEffect(() => {
    if (!router.isReady) return;
    const { kelas, kode, semester } = router.query;
    if (kelas) {
      setKelas(kelas as string);
    }
    if (semester && !kode) {
      setSemester(semester as string);
      const temp = filterData(semester as string);
      setFilteredData(temp);
      setMatkul(temp[0]);
    }
    if (kode) {
      const k = dataMatkul.find((datum) => datum.kode === (kode as string)) ?? dataMatkul[0];
      setMatkul(k);
      setSemester(k.sem);
      setFilteredData(filterData(k.sem));
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <Seo />
      <Nav />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='min-h-screen py-10 space-y-10 text-primary-50 layout'>
            <div className='space-y-8'>
              <h1 className='text-primary-200'>Daftar kelas Teknik Komputer ITS</h1>
              <h2>Langkah-langkah</h2>
            </div>
            <div className='space-y-4' id='step1'>
              <h3>1. Login Sistem Informasi Akademik ITS (SIAKAD)</h3>
              <p>
                Dibuka sampai keliatan laman SIAKAD.{' '}
                <CustomLink href={komi ? '/ssanintegra1.png' : '/ssanintegra.png'} openNewTab className='text-primary-100'>
                  Contoh tampilan seperti ini
                </CustomLink>
              </p>
              <ArrowLink className='text-primary-100' href='https://akademik.its.ac.id/myitsauth.php'>
                Buka SIAKAD
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
              <p>Atau</p>
              <h3>Cari matkul</h3>
              <Select
                key={`select-${semester}-${matkul.kode}`}
                onChange={handleCariMatkul}
                defaultValue={cariMatkulOptions.find((mk) => mk.value === matkul?.kode) ?? cariMatkulOptions[0]}
                theme={selectTheme}
                className='max-w-md'
                options={cariMatkulOptions}
              />
            </div>
            <div className='space-y-4'>
              <h3>3. Pilih Matkul</h3>
              <Select
                key={`select-${semester}-${matkul.kode}`}
                onChange={handleMatkul}
                defaultValue={{ label: matkul?.nama as string, value: matkul?.kode as string }}
                theme={selectTheme}
                className='max-w-md'
                options={matkulOptions}
              />
            </div>
            <div className='space-y-4'>
              <h3>4. Kelas</h3>
              <Select
                key={`select-${kelas}`}
                onChange={(newValue) => setKelas(newValue?.value || 'A')}
                defaultValue={classesOptions.find(({ value }) => value === kelas) ?? classesOptions[0]}
                theme={selectTheme}
                className='max-w-xs'
                options={classesOptions}
              />
            </div>
            <div className='space-y-4' id='step5'>
              <h3>5. Buka link daftar kelas</h3>
              <p>
                Kira-kira gini{' '}
                <CustomLink href='/example.png' openNewTab className='text-primary-100'>
                  hasilnya
                </CustomLink>
              </p>
              <p className='text-gray-300 !mt-2'>
                https://akademik.its.ac.id/lv_peserta.php
                <br />
                ?mkJur=
                <span className='text-primary-200'>{matkul?.mkjur}</span>
                <br />
                {'&'}
                mkID=
                <span className='text-primary-200'>{matkul?.kode}</span>
                <br />
                {'&'}
                mkSem=2{'&'}mkThn=2021
                <br />
                {'&'}
                mkKelas=
                <span className='text-primary-200'>{kelas.toUpperCase()}</span>
              </p>

              <ButtonLink
                variant='outline'
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                  matkul?.kode
                }&mkSem=2&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
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
                      }&mkSem=2&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
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
            <div>
              <Troubleshoot />
            </div>
            <div id='comment-section'>
              <Comment />
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
