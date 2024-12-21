export default function Input(props: any) {
  return (
    <input 
        type={props.type} 
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`input input-${props.type}`}
        {...props}
    />
)
}