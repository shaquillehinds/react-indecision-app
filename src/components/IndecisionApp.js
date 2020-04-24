import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: "",
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: "" }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return `Enter valid value to add item`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists`;
    }

    this.setState((prevState) => ({ options: [...prevState.options, option] }));
  };

  componentDidMount() {
    try {
      if (localStorage.getItem("options")) {
        //Fetching Data From localStorage
        this.setState(() => ({
          options: JSON.parse(localStorage.getItem("options")),
        }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //Saving Data to LocaleStorage
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div className="app">
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          option={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
