import styles from './Button.module.css';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
};

type ButtonComponentProps = {
  children: React.ReactNode;
} & ButtonProps;

export default ({
  href,
  onClick,
  children,
}: ButtonComponentProps): JSX.Element => {
  const Wrapper = href
    ? ('a' as keyof JSX.IntrinsicElements)
    : ('button' as keyof JSX.IntrinsicElements);

  const props: ButtonProps & { target?: string; rel?: string } = {};

  if (href) {
    props.href = href;
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  } else {
    props.onClick = onClick;
  }

  return (
    <Wrapper {...props} className={styles.button}>
      {children}
    </Wrapper>
  );
};
