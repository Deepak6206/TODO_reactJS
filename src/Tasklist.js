import React, { Component } from "react";
import Task from "./Task";
import "./TaskList.css";
export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.item };
    this.back = this.back.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {}
  back(prevName, itemName) {
    if (prevName === itemName) {
      this.flage = true;
    }
    console.log(prevName, itemName);
    this.setState({ items: prevName });
  }
  flage = true; //Flag Value
  edit(prevName, itemName, e) {
    this.flage = false;
    if (prevName === itemName) {
      this.flage = true;
    }

    this.props.edit(prevName, itemName, e);
    this.setState({ items: prevName });
  }
  delete(e) {
    this.props.delete(this.props.item, e);
  }
  render() {
    return (
      <>
        <tr className="TodoList">
          {this.flage === false ? (
            <td>
              <Task editT={this.edit} item={this.props.item} back={this.back} />
            </td>
          ) : (
            <span>
              <td>
                <input type="checkbox" onChange={this.handleChange} />
                {this.props.item}
              </td>
              <td>
                {" "}
                <button onClick={this.edit} className="edit">
                  Edit
                </button>
              </td>
              <td>
                <button onClick={this.delete} className="delete">
                  Delete
                </button>
              </td>
            </span>
          )}
        </tr>
      </>
    );
  }
}
