import React from "react";
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="widget__error">{this.state.error}</p>
        )}
        <form className="widget__form" onSubmit={this.handleAddOption}>
          <input
            className="widget__input"
            name="option"
            type="text"
            placeholder="Add Option Here"
          />
          <button className="button widget__button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
