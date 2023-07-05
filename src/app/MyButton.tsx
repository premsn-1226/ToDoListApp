import React from 'react'

export default function MyButton(props : any) {
  return (
    <button
      style={{ background: props.color, color: "white" }}
      onClick={props.changeColor}
    >
      {" "}
      I am {props.color} button
    </button>
  );
}
