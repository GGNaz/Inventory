import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{

    render() {
        return (
            <nav  className="navbar navbar-expand-md navbar-dark fixed-top bg-dark " style={{padding:"1%"}}>
            <a className="navbar-brand" href="#">Inventory Page</a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/title">Form</Link>
            </li>
          
          </ul>
         
        </div>
          
          </nav>
        )
    }
}