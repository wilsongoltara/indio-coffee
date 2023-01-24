import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import '../styles/globals.css';

const myFont = localFont({ src: '../src/public/font/SoDoSans-Regular.woff2' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={myFont.className + 'max-w-xl'}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
