import '../../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as JotaiProvider } from 'jotai';
import type { AppProps } from 'next/app';
import { trpc } from '../utils/trpc';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjy8ZRHjNBs1EgrDGihwNV03homRyqVVPLQ&usqp=CAU'
        />
      </Head>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
