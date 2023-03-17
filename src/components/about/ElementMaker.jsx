import React from "react";
import'/Users/manalamro/profilo/src/components/about/about.css'
// Create an ElementMaker component
function ElementMaker(props) {
  return (
    <span>
      {
      
        props.showInputEle ? (
          <input className="inputel"
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={props.handleDoubleClick}
          >
            {props.value}
          </span>
        )
      }
    </span>
  );
}

export default ElementMaker;