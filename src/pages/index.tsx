/* eslint-disable @next/next/no-img-element */
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Tippy from '@tippyjs/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { stringifyUrl } from 'query-string';
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

const [mkSemester, mkTahun] = ['2', '2021'];

const Home: NextPage = () => {
  const router = useRouter();
  const [semester, setSemester] = useState<string>(s);
  const [matkul, setMatkul] = useState<DataMatkul>(dataMatkul.find((datum) => datum.kode === `EC4${s}01`) ?? dataMatkul[0]);
  const [kelas, setKelas] = useState<string>('A');

  const [copyStatus, setCopyStatus] = useState<string>('Click to copy');
  const [shareStatus, setShareStatus] = useState<string>('Click to copy shareable URL');

  const [filteredData, setFilteredData] = useState<DataMatkul[]>(filterData(semester));

  const handleMatkul = (newValue: { label: string; value: string } | null) => {
    setMatkul(dataMatkul.find((datum) => datum.kode === newValue?.value) as DataMatkul);
  };

  const handleCariMatkul = (newValue: { label: string; value: string } | null) => {
    if (!newValue) return;
    const { value } = newValue;
    const kode = value;
    const mk = dataMatkul.find((datum) => datum.kode === kode);
    if (!mk) return;
    setSemester(mk.sem);
    setFilteredData(filterData(mk.sem));
    setMatkul(mk);
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

  const [mkSem, mkThn] = useMemo(() => {
    if (!router.isReady) return [mkSemester, mkTahun];
    let { mkSem, mkThn } = router.query;
    mkSem = mkSem ?? mkSemester;
    mkThn = mkThn ?? mkTahun;
    return [mkSem as string, mkThn as string];
  }, [router.isReady, router.query]);

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
          <div className='layout min-h-screen space-y-10 py-10 text-primary-50'>
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
                className='rounded-lg border border-primary-500 bg-black py-2 pl-4 pr-8 focus:border-primary-400 focus:ring-primary-400'
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
              <p className='!mt-2 text-gray-300'>
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
                mkSem={mkSem}
                {'&'}mkThn={mkThn}
                <br />
                {'&'}
                mkKelas=
                <span className='text-primary-200'>{kelas.toUpperCase()}</span>
              </p>

              <ButtonLink
                variant='outline'
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                  matkul?.kode
                }&mkSem=${mkSem}&mkThn=${mkThn}&mkKelas=${kelas.toUpperCase()}`}
              >
                Buka Daftar Kelas
              </ButtonLink>
              <span className='ml-4'>
                <Tippy
                  animation='scale-subtle'
                  hideOnClick={false}
                  content={
                    <span className='bg-dark border-thin inline-flex flex-col items-center rounded-md p-2 shadow-md'>
                      {copyStatus}
                    </span>
                  }
                >
                  <span>
                    <CopyToClipboard
                      text={`https://akademik.its.ac.id/lv_peserta.php?mkJur=${matkul?.mkjur}&mkID=${
                        matkul?.kode
                      }&mkSem=${mkSem}&mkThn=${mkThn}&mkKelas=${kelas.toUpperCase()}`}
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
              <span className='ml-4'>
                <Tippy
                  animation='scale-subtle'
                  hideOnClick={false}
                  content={
                    <span className='bg-dark border-thin inline-flex flex-col items-center rounded-md p-2 shadow-md'>
                      {shareStatus}
                    </span>
                  }
                >
                  <span>
                    <CopyToClipboard
                      text={stringifyUrl({
                        url: 'https://dtk-class.vercel.app/',
                        query: { kode: matkul.kode, kelas, semester },
                      })}
                      onCopy={() => {
                        setShareStatus('Copied shareable URL to clipboard 😳');
                        setTimeout(() => setShareStatus('Click to copy shareable URL'), 1469);
                      }}
                    >
                      <Button className='bg-amber-500'>Share</Button>
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
