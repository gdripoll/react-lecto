import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Lecto from "../components/lecto";

class PageLecto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      error_msg: "",
      breads: [{ name: "Home", to: "/" }, { name: "Lecto", to: "/lecto" }]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.getNavigation()}
          {this.getError()}
          {this.getBreadCrumb()}
          <div className="row">
            <div className="col-12">
              <Lecto />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  getNavigation() {
    // obtengo la navegacion
    return (
      <div className="row">
        <nav className="navbar navbar-light bg-light col-12 mb-2">
          <NavLink className="navbar-brand" to="/">
            Lecto
          </NavLink>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
  getError() {
    // obtengo el error
    if (this.state.error) {
      return (
        <div class="alert alert-danger" role="alert">
          {this.error_msg}
        </div>
      );
    } else {
      return "";
    }
  }
  getBreadCrumb() {
    const breads = this.state.breads.map((b, index) => {
      return (
        <li className="breadcrumb-item" key={index}>
          <NavLink to={b.to}>{b.name}</NavLink>
        </li>
      );
    });
    console.log(breads);
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breads}
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    );
  }
}

export default PageLecto;
