import React, { PureComponent, Component } from "react";
import axios from "axios";
import "bootstrap";
import "../../Css/GetHttp.css";
function CallApi(props) {
  debugger;
  return <HttpGet name={props.id}></HttpGet>;
}

class HttpGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      error: "",
      currentpage: 1,
      pageLimit: 5,
      searchText: "",
    };
  }

  searchTextHandler = (e) => {
    let text = e.target.value;
    this.setState({ ...this.state, searchText: text, currentpage: 1 });
  };

  nextPage = () => {
    console.log("next page");

    this.setState((prev) => ({
      ...prev,
      currentpage: prev.currentpage + this.state.pageLimit,
    }));
  };
  prevPage = () => {
    this.setState((prev) => ({
      ...prev,
      currentpage: prev.currentpage - this.state.pageLimit,
    }));
  };

  paginationData = () => {
    var data = this.state.list;
    data =
      this.state.searchText != ""
        ? data.filter((e) => e.title.includes(this.state.searchText))
        : data;
    return data.length > 0
      ? data.slice(
          (this.state.currentpage - 1) * this.state.pageLimit,
          (this.state.currentpage - 1) * this.state.pageLimit +
            this.state.pageLimit
        )
      : [];
  };
  getPagesCount(TotalCount) {
    return Math.ceil(TotalCount / this.state.pageLimit);
  }
  getPages(cPage,totalPages) {
    if (cPage % this.state.pageLimit != 0) {
      cPage = Math.floor(cPage / this.state.pageLimit) * this.state.pageLimit;
    } else if (
      cPage % this.state.pageLimit == 0 &&
      cPage < this.getPagesCount()
    ) {
      cPage =
        Math.floor(cPage / this.state.pageLimit) * this.state.pageLimit - 1;
    } else if (cPage == this.getPagesCount()) {
      cPage = this.getPagesCount() - this.state.pageLimit;
    }
    return Array.from(Array(totalPages), (i, ind) => cPage + 1 + ind).slice(0,5);
  }

  changePage = (num) => {
    if (num <= Math.ceil(this.state.list.length / this.state.pageLimit)) {
      this.setState({ ...this.state, currentpage: num });
    }
  };

  componentDidMount() {
    console.log("did mount");
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        console.log(response);
        this.setState({ list: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState.length({ ...this.state, error: "Something Went Wrong" });
      });
  }
  shouldComponentUpdate(nextState) {
    return this.state.currentpage != nextState.currentpage;
  }
  render() {
    const listele = this.paginationData();
    const TotalPages = this.getPagesCount(this.state.list .length);
    const pages =
      listele.length > 0 ? this.getPages(this.state.currentpage,TotalPages) : [];
    return (
      <div className="m-auto mt-3">
        <div></div>
        <div className="container">
          <div className="">
            <input
              id="serach-box"
              value={this.state.searchText}
              className="mb-2 mt-2 rounded text-center ml-5"
              onChange={this.searchTextHandler}
              placeholder="Please Enter to search"
              type="text"
            />
          </div>
          {listele.length > 0
            ? listele.map((e) => (
                <div className="card m-auto mb-2" key={e.id}>
                  <div className="text-center id">
                    <p>{e.id}</p>
                  </div>
                  <div className="text-center title">{e.title} </div>
                  <div className="text-center">{e.body}</div>
                </div>
              ))
            : listele}
        </div>
        <div className="float-right mr-5 mt-2">
          <a
            className={
              this.state.currentpage < this.state.pageLimit
                ? "btn btn-white disabled"
                : "btn btn-info"
            }
            onClick={this.prevPage}
          >
            PrevPage
          </a>
          {pages
            ? pages.map((e) => (
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => this.changePage(e)}
                >
                  {e}
                </button>
              ))
            : ""}
          <a
            className={
              this.state.currentpage + this.state.pageLimit > TotalPages
                ? "btn  btn-white disabled"
                : "btn btn-info"
            }
            onClick={this.nextPage}
          >
            NextPage
          </a>
        </div>
      </div>
    );
  }
}

export default CallApi;
