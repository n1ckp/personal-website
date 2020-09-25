import Button from './Button';

import styles from './Contact.module.css';

const CONTACT_OPTIONS = [
  {
    title: 'Email',
    href: 'mailto:nicktgphillips@gmail.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ntgphillips/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/n1ckp',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export default function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      {CONTACT_OPTIONS.map(({ title, href }, i) => {
        return (
          <Button key={i} href={href}>
            <span>{title}&nbsp;➚</span>
          </Button>
        );
      })}
    </div>
  );
}
