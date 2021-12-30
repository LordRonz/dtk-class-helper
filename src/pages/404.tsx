import type { NextPage } from 'next';

import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

const NotFound: NextPage = () => (
  <>
    <Seo templateTitle='Not Found' />
    <main>
      <section className='bg-black text-primary-50'>
        <div className='layout flex flex-col justify-center items-center min-h-screen text-center gap-y-40'>
          <div className='flex flex-col gap-y-4'>
            <h1 className='text-8xl text-primary-300'>404</h1>
            <h2>Page Not Found</h2>
          </div>

          <p className='text-xl text-primary-200'>
            <CustomLink href='/' openNewTab={false}>
              Back To Home
            </CustomLink>
          </p>
        </div>
      </section>
    </main>
  </>
);

export default NotFound;
