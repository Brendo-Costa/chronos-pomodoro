import styles from './styles.module.css';

type DefaultInputProps ={
  labelText?: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props:DefaultInputProps) {
  

  
  return (
    <>
      { props.labelText && <label htmlFor={props.id}>{props.labelText}</label> }
      <input className={styles.input} {...props} type={ props.type } id={ props.id }/>   
    </>
  );
};


export default DefaultInput;