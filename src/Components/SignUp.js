import React from "react";
import store from "../Redux/Store";
import { Register } from "../Redux/ActionCreator";

class Signup extends React.Component {
  //states
  state = {
    email: "",
    passsword: "",
    error: ""
  };

  //helper function passsword
  handlePassword = (event) => {
    this.setState({ passsword: event.target.value });
  };

  //helper function email
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  //helper function submit
  handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(Register(this.state.email, this.state.passsword));
    console.log(store.getState());
  };

  render() {
    return (
      <>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => this.handleEmail(event)}
              placeholder="Email"
              value={this.state.email}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(event) => this.handlePassword(event)}
              placeholder="Password"
              value={this.state.passsword}
              name="password"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Signup;
