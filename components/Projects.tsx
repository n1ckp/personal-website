import styles from './Projects.module.css';

type Project = {
  title: string;
  url?: string;
  codeURL?: string;
  description: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'SpotMyBands',
    url: 'https://spotmybands.n1ck.dev/',
    codeURL: 'https://github.com/n1ckp/spotmybands',
    description:
      'A website for quickly finding upcoming live music events for the bands you listen to. Uses a combination of Spotify and Songkick APIs to show artists and their events on an interactive map.',
    tags: ['Heroku', 'React', 'Javascript', 'APIs'],
  },
  {
    title: 'MyTFL',
    codeURL: 'https://github.com/n1ckp/MyTFL',
    description:
      'A simple React Native app, showing the status of London Tube lines.',
    tags: ['React Native', 'Javascript', 'Expo'],
  },
  {
    title: 'CodeAssistant',
    url: 'https://codeassistant.n1ck.dev/',
    description:
      "An online educational programming environment with interactive debugging tools, designed specifically with secondary schools in mind. Created for my Master's dissertation.",
    tags: [
      'Google App Engine',
      'Flask',
      'Python',
      'ASTs',
      'Education',
      'Algorithms',
    ],
  },
];

export default function Projects(): JSX.Element {
  return (
    <>
      <h2>Side Projects</h2>
      <ul className={styles.projects}>
        {PROJECTS.map(({ title, description, url, codeURL }: Project, i) => (
          <li key={i}>
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}&nbsp;➚
              </a>
            )}
            {!url && <p>{title}</p>}
            {codeURL && (
              <a
                href={codeURL}
                className={styles.codeURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code link&nbsp;➚
              </a>
            )}
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
