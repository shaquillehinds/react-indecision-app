import React from "react";

const Option = (props) => (
  <li className="widget__option">
    {props.index + 1}. {props.option}
    <button
      className="button button--link"
      onClick={(e) => props.handleDeleteOption(props.option)}
    >
      Remove
    </button>
  </li>
);

export default Option;
