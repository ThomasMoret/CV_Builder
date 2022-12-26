import React from "react";
import "../styles/button.css";

function EditButton(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}

export default EditButton;
