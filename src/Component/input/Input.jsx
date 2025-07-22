function Input(props) {
  return (
    <>
      <label>{props.name}</label>
      <input name={props.name} onChange={props.handlechange} type="text" />
    </>
  );
}
export default Input;
