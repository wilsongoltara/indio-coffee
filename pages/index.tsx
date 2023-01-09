import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indio Coffee Company</title>
        <meta name='description' content='Clone page of Starbucks Company' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex items-center justify-center h-screen w-auto'>
        <h1 className='text-3xl font-bold'>Indio Coffee Company!</h1>
      </div>
    </>
  );
}
