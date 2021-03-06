import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    <ol className="widget__options">
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          option={option}
          index={index}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
