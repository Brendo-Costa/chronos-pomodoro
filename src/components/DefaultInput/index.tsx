

type DefaultInputProps ={
  label: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props:DefaultInputProps) {
  
  
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} />   
    </>
  );
};


export default DefaultInput;