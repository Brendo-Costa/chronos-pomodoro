import styles from './styles.module.css';
import clsx from 'clsx';

type DefaultButtonProps = {
  children: React.ReactNode;
  status?: 'start' | 'stop';
} & React.ComponentProps<'button'>;

export function DefaultButton({ children, status, className, ...rest }: DefaultButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[status], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
