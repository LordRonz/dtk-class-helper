import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {process.env.CI !== 'true' && (
            <script
              async
              defer
              data-website-id='64c14ec3-3396-43c3-a559-27231cde7b7a'
              src='https://umami-xi-eight.vercel.app/umami.js'
              data-domains='dtk-class.vercel.app'
            />
          )}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-light text-dark transition-colors dark:bg-dark dark:text-primary-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
