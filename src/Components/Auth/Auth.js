import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedInUser: {}
    };
  }

  usernameHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordHandler = e => {
    this.setState({
      password: e.target.value
    });
  };

  register = () => {
    const registerPayload = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(registerPayload);
    axios.post("/auth/register", registerPayload).then(user => {
      this.setState({
        loggedInUser: user.data
      });
    });
  };

  render() {
    return (
      <div>
        Auth
        <input placeholder="username" onChange={e => this.usernameHandler(e)} />
        <input placeholder="password" onChange={e => this.passwordHandler(e)} />
        <button>Login</button>
        <button onChange={this.register}>
          {" "}
          <Link to="/dashboard">Register</Link>
        </button>
      </div>
    );
  }
}

export default Auth;
