import styles from './Layout.module.css';

const META_DATA = {
    title: 'Nick Phillips | Software Engineer',
    description:
        'Software Engineer specialising in Full-Stack Web Development.',
    image: '/favicon.ico',
    type: 'website',
    url: 'https://n1ck.dev/',
};

export const siteTitle = META_DATA.title;

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <div className={styles.container}>
            {/* Head/meta handled by App Router metadata (app/head.tsx + app/layout.tsx) */}
            <main>{children}</main>
            {/* GoogleAnalytics is injected at the app layout level */}
        </div>
    );
}
