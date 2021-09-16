import React from 'react'

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? 'Ноль' : props.value;
  }
  const getBadgeValue = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  }
  return ( 
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeValue()}>{formValue()}</span>
      <button className="btn btn-success btn-sm m-2" onClick={() => props.onIncrement(props.id)}>Increment</button>
      <button className="btn btn-info btn-sm m-2" onClick={() => props.onDecrement(props.id)}>Decrement</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
   );
}
 
export default Counter;