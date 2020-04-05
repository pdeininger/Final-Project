import React from "react";
import TextField from "@material-ui/core/TextField";

function App() {
  //javascript logic goes here
  // Setting the component's initial state
  let state = {
    userName: "",
    password: "",
  };

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    let setState = {
      [name]: value,
    };
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.userName) {
      alert("User Name required!");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password ${this.state.userName}`);
    } else {
      alert(`Hello ${this.state.userName}`);
    }
    const res = fetch("/users", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
    });

    const json = res.json();

    return json;
    this.setState({
      userName: "",
      password: "",
    });
  };

  return (
    //html & css go here
    <div className="App">
      <h1>Mentor Login Page!</h1>
      <form
        className="login"
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="userName-basic"
          label="User Name"
          variant="filled"
          value={state.userName}
          onChange={handleInputChange}
          required
        />
        <TextField
          id="password-basic"
          label="Password"
          variant="filled"
          value={state.password}
          onChange={handleInputChange}
          required
        />
      </form>
    </div>
  );
}

export default App;
