import '../styles/global.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: 'Nick Phillips | Software Engineer',
  description: 'Software Engineer specialising in Full-Stack Web Development.',
  openGraph: {
    title: 'Nick Phillips | Software Engineer',
    description: 'Software Engineer specialising in Full-Stack Web Development.',
    url: 'https://n1ck.dev/',
    images: ['/favicon.ico'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Phillips | Software Engineer',
    description: 'Software Engineer specialising in Full-Stack Web Development.',
    images: ['/favicon.ico'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
