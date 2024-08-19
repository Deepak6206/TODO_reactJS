import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ itemName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.str = this.state.itemName;
    this.props.addItem(this.state.itemName, e);
    this.setState({ itemName: "" });
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task"></label>
          <input
            className="ADDTASK"
            type="text"
            id="task"
            value={this.state.itemName}
            onChange={this.handleChange}
          />
          <button className="add" type="submit">
            Add Task
          </button>
        </form>
      </>
    );
  }
}
