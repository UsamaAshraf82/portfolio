import info from '@/info';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/dist/pages/_app';
import Head from 'next/head';
import React from 'react';

export const InfoContext = React.createContext(info);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Muhammad Usama Ashraf</title>
        <meta
          name='description'
          content='Programmer, Developer, Software Engineer From Pakistan 🇵🇰 and Working
          as a Full Time Freelancer'
        />
        <meta name='keywords' content='Web development services' />
        <meta name='og:title' content='Muhammad Usama Ashraf' />
        <meta
          name='og:image'
          content='Programmer, Developer, Software Engineer From Pakistan 🇵🇰 and Working
          as a Full Time Freelancer'
        />
      </Head>
      <InfoContext.Provider value={info}>
        <Component {...pageProps} />
      </InfoContext.Provider>
      <Analytics />
    </>
  );
}
