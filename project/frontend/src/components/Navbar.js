import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import ModalLogin from "./ModalLogin";


class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      formLogin: false
    }
  }

  handleFormLogin = () => {
    this.setState({ formLogin: !this.state.formLogin })
    console.log(this.state.formLogin)
  }

  toggle = () => {
    this.setState({ formLogin: !this.state.formLogin})
  }

  render() {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">EMMA</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item active">
            <Link to="/viewemployee" className="nav-link">Employee</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item active">
            <a class="nav-link" href="#" onClick={this.handleFormLogin}>Login</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    {this.state.formLogin ? <ModalLogin toggle={this.toggle}/> : ""}
    </div>
    )
  }
}


export default Navbar
