import Head from 'next/head';
import Search from '../components/Search';

export default function Home() {
  return (
    <>
      <Head>
        <title>API Search</title>
        <meta name="description" content="A sample app to search an API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Search />
      </main>
    </>
  );
}
