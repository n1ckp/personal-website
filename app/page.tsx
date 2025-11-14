import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Specialities from '../components/Specialities';
import Projects from '../components/Projects';
import Learning from '../components/Learning';
import utilStyles from '../styles/utils.module.css';
import styles from './page.module.css';

const Home = (): React.ReactElement => (
  <Layout>
    <h1 className={styles.mainHeader}>
      NICK<span>PHILLIPS</span>
    </h1>
    <section className={utilStyles.headingMd}>
      <p>Hi. I&#39;m Nick. Software Engineer.</p>
      <p>I love working on solutions which make people happy.</p>
      <p>
        I currently work at{' '}
        <a href="https://www.primevideo.com/" target="_blank" rel="noopener noreferrer">
          Prime Video
        </a>
        , creating the Web UI for the signup funnel.
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
