import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  console.log(props);
  const id = props.id;
  return (
    <div style={{width:props.width,height:props.height}}>
      <a id={id}  href="#" className={'btnInUsed'}>
        {props.content}
      </a>
    </div>
  );
};

export default Buttons;
