import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property='og:url' content='your url' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Context' />
        <meta
          property='og:description'
          content='context is the key to narrative storytelling'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjy8ZRHjNBs1EgrDGihwNV03homRyqVVPLQ&usqp=CAU'
        />
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjy8ZRHjNBs1EgrDGihwNV03homRyqVVPLQ&usqp=CAU'
        />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:width' content='1200' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
