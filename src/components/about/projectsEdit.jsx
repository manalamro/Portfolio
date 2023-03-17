// ElementMaker.js

import React from "react";
import'/Users/manalamro/profilo/src/components/about/about.css'
// Create an ElementMaker component
function ProjectsEdit(props) {
  return (
    <span>
      {
        // Use JavaScript's ternary operator to specify <span>'s inner content
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

export default ProjectsEdit;