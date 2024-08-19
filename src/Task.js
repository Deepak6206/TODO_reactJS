import React, { Component } from "react";
import "./Task.css";
export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: this.props.item };
    this.prevName = this.state.itemName;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(e) {
    this.props.back(this.prevName, this.state.itemName);
  }
  handleChange(e) {
    this.setState({ itemName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.str = this.state.itemName;
    this.props.editT(this.prevName, this.str, e);

    this.setState({ itemName: "" });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task"></label>
          <input
            type="text"
            id="task"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <button type="submit" className="save">
            Save
          </button>
          <button type="button" onClick={this.handleBack} className="back">
            Back
          </button>
        </form>
      </>
    );
  }
}
