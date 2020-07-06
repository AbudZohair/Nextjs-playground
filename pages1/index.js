import Head from 'next/head';
import axios from 'axios';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
// import useSWR from 'swr';
import { fetcher } from './../lib/fetcher';

export default function Home({ allPostsData }) {
  // const { data, error } = useSWR(
  //   'https://jsonplaceholder.typicode.com/users/1',
  //   fetcher
  // );
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction {}]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {/* <h1>{error ? 'Failed fetching' : !data ? 'loading...' : data.name}</h1> */}
      </section>
    </Layout>
  );
}

//For static site generation
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

// for ServerSide Rendering
/**
 * export async function getServerSideProps(context){
 * const .....
 *
 * return{
 * props: {}
 * }
 * }
 */
