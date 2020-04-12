import React from "react";
import TextField from "@material-ui/core/TextField";
import { Component } from "react";

class Login extends Component {
  //javascript logic goes here
  // Setting the component's initial state
  state = {
    userName: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let target = event.target;
    const name = target.name;
    const value = target.value;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    const payload = {
      userName: this.state.userName,
      password: this.state.password,
    };

    const res = fetch("/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    this.setState({
      userName: "",
      password: "",
    });
    const json = res.json;
    console.log(json);
    return json;
  };
  render() {
    console.log(this.state);
    return (
      //html & css go here
      <div className="Login">
        <h1>Mentor Login Page!</h1>
        <form
          className="login"
          noValidate
          autoComplete="off"
          onSubmit={this.handleFormSubmit}
        >
          <TextField
            id="userName-basic"
            name="userName"
            variant="filled"
            value={this.state.userName}
            onChange={this.handleInputChange}
            required
          />
          <TextField
            id="password-basic"
            name="password"
            variant="filled"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
