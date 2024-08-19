import React, { Component } from "react";
import Tasklist from "./Tasklist";
import Form from "./Form";
import "./Main.css";

export default class Main extends Component {
  constructor() {
    super();
    this.state = { CHECKBOX: [] };
    this.Additem = this.Additem.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Edit = this.Edit.bind(this);
    //this.back = this.back.bind(this);
  }

  Additem(Item, e) {
    this.arr = this.state.CHECKBOX;
    this.arr.push(Item);
    this.setState({ CHECKBOX: this.arr });
  }

  Delete(ItemName, e) {
    let arr = this.state.CHECKBOX.filter((x) => x !== ItemName);
    this.setState({ CHECKBOX: arr });
  }
  Edit(prevName, ItemName, e) {
    let brr = this.state.CHECKBOX;

    for (let x in brr) {
      if (brr[x] === prevName) {
        brr[x] = ItemName;
      }
    }

    this.setState({ CHECKBOX: brr });
  }

  render() {
    let plist = this.state.CHECKBOX.map((x) => (
      <Tasklist key={x} item={x} delete={this.Delete} edit={this.Edit} />
    ));
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="content">
          <Form addItem={this.Additem} />
          <table className="table">
            <thead>
              <tr>
                <th className="TASK">Task</th>

                <th> Action</th>
              </tr>
            </thead>
            {plist}
          </table>
        </div>
      </div>
    );
  }
}
