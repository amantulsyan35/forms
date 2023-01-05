import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property='og:url' content='your url' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Context' />
        <meta
          name='twitter:card'
          content='https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif'
        />
        <meta
          property='og:description'
          content='context is the key to narrative storytelling'
        />
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjy8ZRHjNBs1EgrDGihwNV03homRyqVVPLQ&usqp=CAU'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
