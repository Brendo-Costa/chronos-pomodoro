import styles from './styles.module.css';

type DefaultInputRowProps = {
  children: React.ReactNode;
}

export function DefaultInputRow(props:DefaultInputRowProps) {
  return(
  <div className={styles['formRow']}>
    {props.children}
  </div>
  )
}

export default DefaultInputRow;