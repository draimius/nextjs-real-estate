import '../styles/globals.css';
//extra stuff needed if using the nextjs with chakra(import and tag in app render)
import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import NProgress from 'nprogress';

import Layout from '../components/Layout';

import { Html, Head, Main, NextScript } from 'next/document';

export function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

function MyApp({ Component, pageProps }) {
  //component for 'loading display' initialize to false
  NProgress.configure({ showSpinner: false });

  //nextjs specific even we can track (on a route/path change we dispay loader
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  //then when page done loading/rendering data we remove the loader from display (both with specified event listeners)
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
