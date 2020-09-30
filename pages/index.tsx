import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Contact from '../components/Contact';
import Specialities from '../components/Specialities';
import Projects from '../components/Projects';
import Learning from '../components/Learning';
import utilStyles from '../styles/utils.module.css';
import styles from './index.module.css';

const Home = (): JSX.Element => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h1 className={styles.mainHeader}>
      NICK<span>PHILLIPS</span>
    </h1>
    <section className={utilStyles.headingMd}>
      <p>Hi. I&apos;m Nick. Software Engineer.</p>
      <p>I love working on solutions which make people happy.</p>
      <p>
        I currently work on the UI experience for signup at{' '}
        <a
          href="https://www.primevideo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prime&nbsp;Video
        </a>
        .
      </p>
    </section>
    <section>
      <Contact />
    </section>
    <section>
      <Specialities />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Learning />
    </section>
  </Layout>
);

export default Home;
