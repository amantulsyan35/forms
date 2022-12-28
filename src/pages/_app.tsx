import '../../styles/globals.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as JotaiProvider } from 'jotai';
import type { AppProps } from 'next/app';
import { trpc } from '../utils/trpc';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
