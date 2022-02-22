import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
