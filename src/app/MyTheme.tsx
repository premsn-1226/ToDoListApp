import React from 'react'

export default function MyTheme(props : any) {
  var color = props.theme === "black" ? "white" : "black";
  return (
    <button
      style={{ background: props.theme, color: color, border: "2px solid" }}
      onClick={props.changeTheme}
    >
      {props.theme}
    </button>
  );
}
