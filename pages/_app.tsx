import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import '../styles/globals.css';

const myFont = localFont({ src: '../public/font/SoDoSans-Bold.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={myFont.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
