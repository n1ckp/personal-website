import Head from 'next/head';
import GoogleAnalytics from './GoogleAnalytics';
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
            <Head>
                <title>{siteTitle}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content={META_DATA.description} />
                <meta name="image" content={META_DATA.image} />

                <meta property="og:title" content={META_DATA.title} />
                <meta property="og:type" content={META_DATA.type} />
                <meta
                    property="og:description"
                    content={META_DATA.description}
                />
                <meta property="og:image" content={META_DATA.image} />
                <meta property="og:url" content={META_DATA.url} />

                <meta name="twitter:title" content={META_DATA.title} />
                <meta
                    name="twitter:description"
                    content={META_DATA.description}
                />
                <meta name="twitter:image" content={META_DATA.image} />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel="icon" type="image/x-icon" href={META_DATA.image} />
                <link
                    href="https://fonts.googleapis.com/css?family=Rubik:300,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>{children}</main>
            <GoogleAnalytics />
        </div>
    );
}
