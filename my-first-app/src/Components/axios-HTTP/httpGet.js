import React, { Component } from "react";
import axios from "axios";

function CallApi(props) {
  debugger;
  return <HttpGet name={props.id}></HttpGet>;
}

class HttpGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    debugger;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then((response) => {
        console.log(response);
        this.setState({ list: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const listele = this.state.list;
    console.log(listele);
    let specChar = "=>";
    return (
      <div>
        {listele.map((e) => (
          <div>
            {e.title} {specChar} {e.body}
          </div>
        ))}
      </div>
    );
  }
}

export default CallApi;
