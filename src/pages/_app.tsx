import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function Innopolis({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Innopolis Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Saidaziz, a developer passionate about technology."
        />
        <meta name="author" content="Saidaziz Kadirov" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Innopolis;
