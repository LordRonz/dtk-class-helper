import type { NextPage } from 'next';

import Code, { Pre } from '@/components/Code';
import UnstyledLink from '@/components/links/UnstyledLink';
import Nav from '@/components/Nav';
import Seo from '@/components/Seo';

const ApiDocs: NextPage = () => (
  <>
    <Seo templateTitle='API Docs' />
    <Nav />
    <main>
      <section className=''>
        <div className='layout min-h-screen space-y-10 py-16'>
          <div className='space-y-4'>
            <h1 className='text-primary-200'>API</h1>
            <p>Method: GET</p>
            <p>
              URL:{' '}
              <UnstyledLink
                href='/api/matkul'
                openNewTab
                className='text-primary-200'
              >
                <code>/api/matkul</code>
              </UnstyledLink>
            </p>
            <p>Response: </p>
          </div>
          <Pre lang='json' className='bg-gray-300 text-sm dark:bg-gray-800'>
            <Code lang='json' className='language-json'>
              {`{
  "dataMatkul":[
    {
      "kode":"EW4001",
      "mkjur":"29100",
      "nama":"Pengantar Teknologi Elektro",
      "sem":"1"
    },
    {
      "kode":"EW4002",
      "mkjur":"29100",
      "nama":"Dasar Pemrograman",
      "sem":"1"
    },
    {
      "kode":"EW4003",
      "mkjur":"29100",
      "nama":"Rangkaian Listrik",
      "sem":"2"
    },
    {
      "kode":"EC4201",
      "mkjur":"29100",
      "nama":"Pemrograman Lanjut",
      "sem":"2"
    },...truncated
  ]
}`}
            </Code>
          </Pre>
          <div className='space-y-4'>
            <p>Method: GET</p>
            <p>
              URL:{' '}
              <UnstyledLink
                href='/api/matkul/EC4201'
                openNewTab
                className='text-primary-200'
              >
                <code>/api/matkul/EC4201</code>
              </UnstyledLink>
            </p>
            <p>Response: </p>
          </div>
          <Pre lang='json' className='bg-gray-300 text-sm dark:bg-gray-800'>
            <Code lang='json' className='language-json'>
              {`{
  "kode":"EC4201",
  "mkjur":"29100",
  "nama":"Pemrograman Lanjut",
  "sem":"2"
}`}
            </Code>
          </Pre>
          <div className='space-y-4'>
            <p>Method: GET</p>
            <p>
              URL:{' '}
              <UnstyledLink
                href='/api/matkul?search=kuliah'
                openNewTab
                className='text-primary-200'
              >
                <code>/api/matkul?search=kuliah</code>
              </UnstyledLink>
            </p>
            <p>Response: </p>
          </div>
          <Pre lang='json' className='bg-gray-300 text-sm dark:bg-gray-800'>
            <Code lang='json' className='language-json'>
              {`{
  "dataMatkul":[
    {
      "kode":"UG4917",
      "mkjur":"29100",
      "nama":"Kuliah Kerja Nyata Tematik",
      "sem":"6"
    }
  ]
}`}
            </Code>
          </Pre>
        </div>
      </section>
    </main>
  </>
);

export default ApiDocs;
