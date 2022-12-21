import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    email: "",
    username: "",
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
    };

    axios
      .post(`https://gotravel-production.up.railway.app/api/v1/login`, { user })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3 h6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control bg-transparent formInput"
              id="username"
              onChange={this.handleChange}
              placeholder="your username"
            />
          </div>
          <div className="mb-3 h6">
            <label htmlFor="passwd" className="col-sm-2 col-form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-transparent formInput"
              id="password"
              onChange={this.handleChange}
              placeholder="your password"
            />
          </div>
          <a href="/" className="forgot">
            Back to the site
          </a>
          <br />
          <br />
          <div className="d-grid gap-2">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
