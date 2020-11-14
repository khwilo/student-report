import Head from 'next/head';
import Header from '../container/Header';
import Main from '../container/Main';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student Report</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Main />
    </div>
  );
}
