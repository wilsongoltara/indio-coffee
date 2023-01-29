'use client';

import localFont from '@next/font/local';
import Footer from '~/core/pages/global/Footer';
import Header from '~/core/pages/global/Header';
import '~/core/pages/global/styles/globals.css';

const myFont = localFont({ src: '../../public/font/SoDoSans-Regular.woff2' });

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      
        <meta
          property='og:description'
          content='Simple clone main page Starbuck.com'
        />
        <meta
          name='description'
          content='Simple clone main page Starbuck.com'
        />
        <meta
          name='keywords'
          content='clone, starbucks'
        />
      </head>
      <body>
        <Header />
        <main className={myFont.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
