import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property='og:url' content='your url' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='./context_bg.webp' />
        <meta name='twitter:card' content='./context_bg.webp' />
        <meta
          property='og:description'
          content='context is the key to narrative storytelling'
        />
        <meta property='og:image' content='./context_bg.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
