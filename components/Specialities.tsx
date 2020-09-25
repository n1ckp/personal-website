import styles from './Specialities.module.css';

const SPECIALITIES: string[] = [
  'NodeJS',
  'TypeScript',
  'React',
  'Redux',
  'Jest',
  'WebdriverIO',
  'ES6',
  'Heroku',
  'SASS (SCSS)',
  'HTML5',
  'AWS',
  'UI/UX',
  'Server-Side Rendering',
  'Agile',
  'TDD',
  'SEO',
];

export default (): JSX.Element => (
  <p className={styles.specialities}>
    {SPECIALITIES.map((speciality, i) => {
      return <span key={i}>{speciality}</span>;
    })}
  </p>
);
