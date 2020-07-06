import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/" as="/home">
          <a>Back to home</a>
        </Link>
        <Link href="/posts/second-post">
          <a>Second post</a>
        </Link>
      </h2>
    </Layout>
  );
}
