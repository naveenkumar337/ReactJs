import React, { Component } from "react";

export class FormExample extends Component {
  constructor(props) {
    super(props);
    //With defining Properties
    this.state = {
      userName: "",
      comment: "",
      select: "react",
    };
    //Without Defining Props
    //     this.state = {
    //         userName:'',
    //         comment:'',
    //         select:'react'
    //    }
  }
  handleChanges = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    const { userName, comment, select } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <label>TextArea:</label>
            <textarea
              name="comment"
              value={comment}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <label>Topic:</label>
            <select name="select" value={select} onChange={this.handleChanges}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
              <option value=".Net">.Net</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormExample;
