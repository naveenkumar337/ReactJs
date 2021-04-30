import axios from "axios";
import React, { Component } from "react";
import CallApi from "./httpGet";

function HttpPost() {
  return (
    <div>
      <EntryForm></EntryForm>
    </div>
  );
}

class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }
  OnSubmit = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((succes) => {
        let data = succes.data;
        if (succes.data.id > 0) {
          console.log(`${data.id} ${data.title} ${data.body}`);
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  saveData = (ele) => {
    this.setState({
      [ele.target.name]: ele.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.OnSubmit}>
          <div>
            <label id="title-lbl">Title</label>
            <input
              name="title"
              id="title"
              onChange={this.saveData}
              type="text"
            />
          </div>
          <div>
            <label id="body-lbl">Body</label>
            <input name="body" id="body" type="text" onChange={this.saveData} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
function callapi(properties) {
  return <CallApi props={properties} />;
}

export default HttpPost;
