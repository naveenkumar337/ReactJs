import { extend } from "jquery";
import React, { Component, createRef, Context } from "react";

class MokeTestSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: [
        {
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football",
        },
        {
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball",
        },
        {
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball",
        },
        {
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch",
        },
        {
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5",
        },
        {
          category: "Electronics",
          price: "$199.99",
          stocked: true,
          name: "Nexus 7",
        },
      ],
    };
  }
  render() {
    const PRODUCTS = this.state.Products;
    return <FilterProductTable products={PRODUCTS} />;
  }
}
class FilterProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(text) {
    this.setState({
      filterText: text,
    });
  }
  handleInStockChange(isInStockValue) {
    this.setState({
      isStockOnly: isInStockValue,
    });
  }
  render() {
    return (
      <div className="Main-Tag">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <Producttable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.isStockOnly}
        />
      </div>
    );
  }
}
class Producttable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const row = [];
    let lastCategory = null;
    this.props.products.forEach((prod) => {
      if (prod.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      } 
      if (inStockOnly && !prod.stocked) {
        debugger;
        return;
      }
      if (prod.category !== lastCategory) {
        row.push(<ProductCategiryRow category={prod.category} />);
      }
      row.push(<ProductRow products={prod} style={this.props.ischecked} />);
      lastCategory = prod.category;
    });
    return (
      <div>
        <div className="result-Set">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
              </tr>
            </thead>
    <tbody>{row.length>0?row:<tr><td style={{color:'red',textalign:'center'}}>NoData Found</td></tr>}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <div className="search-Bar">
        <input
          type="text"
          aria-label="Text"
          aria-required="true"
          onChange={this.handleFilterTextChange}
          value={this.props.filterText}
          placeholder="Search...."
        />
        <div>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <p>By selecting you can search only products</p>
        </div>
      </div>
    );
  }
}
class ProductCategiryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}
class ProductRow extends React.Component {
  render() {
    const product = this.props.products;
    const name = product.stocked ? (
      product.name
    ) : (
      <span
        style={{
          color: "red",
        }}
      >
        {product.name}
      </span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default MokeTestSample;
