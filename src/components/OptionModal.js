import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.option}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3>Seleted Option</h3>
    {props.option && <p>{props.option}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
