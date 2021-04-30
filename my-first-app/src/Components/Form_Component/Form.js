import React, { Component, useEffect } from "react";

export class Form extends Component {
  constructor() {
    console.log("Constructer");
    super();
    this.state = {
      userName: "",
      comment: "",
      topic: "react",
    };
  }

  componentWillMount() {
    console.log("Ngonint");
  }

  componentDidMount() {
    console.log("After doc load");
  }

  componentWillUnmount() {
    console.log("Component before destroying");
  }

  changeUserNameValue = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleSelections = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>UserName</label>
              <input
                type="text"
                name="username"
                onChange={this.changeUserNameValue}
              />
            </div>
            <div>
              <label>TextArea:</label>
              <textarea
                name="comment"
                value={comment}
                onChange={this.handleCommentChange}
              />
            </div>
            <div>
              <label>Topic:</label>
              <select
                name="select"
                value={topic}
                onChange={this.handleSelections}
              >
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="vue">.Net</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
