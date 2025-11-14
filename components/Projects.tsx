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
        title: 'Personal Website',
        url: 'https://n1ck.dev',
        codeURL: 'https://github.com/n1ckp/personal-website',
        description: 'This website!',
        tags: ['Next.js', 'React', 'Typescript', 'HTML', 'CSS'],
    },
    {
        title: 'Web Games - Sequence Copy',
        url: 'https://games.n1ck.dev/sequence-copy',
        description:
            'Simple web-based game where you must click squares in a grid in sequence.',
        tags: ['React', 'Typescript', 'HTML', 'CSS'],
    },
    {
        title: 'MyTFL',
        codeURL: 'https://github.com/n1ckp/MyTFL',
        description:
            'A simple React Native app, showing the status of London Tube lines.',
        tags: ['React Native', 'Javascript', 'Expo'],
    },
];

export default function Projects(): React.ReactElement {
    return (
        <>
            <h2>Side Projects</h2>
            <p>Stuff I work on in my limited spare time.</p>
            <ul className={styles.projects}>
                {PROJECTS.map(
                    ({ title, description, url, codeURL }: Project, i) => (
                        <li key={i}>
                            {url && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
                                    Code&nbsp;➚
                                </a>
                            )}
                            <p>{description}</p>
                        </li>
                    )
                )}
            </ul>
        </>
    );
}
