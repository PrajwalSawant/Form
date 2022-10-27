import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./form.css";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      mobileNo: "",
      UserLogin: {
        userid: "",
        email: "",
      },
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        mobileno: this.state.mobileNo,
        userLogin: {
          userId: this.state.UserLogin.userid,
          email: this.state.UserLogin.email,
        },
      };
      alert("Your data has been submitted");
      console.log("Data", data);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  handleInputData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEmail = (e) => {
    let eId = Object.assign({}, this.state.UserLogin);
    // eid = {  userid: "",email: "",}
    eId.email = e.target.value;
    this.setState({ UserLogin: eId });
  };
  handleUserID = (e) => {
    let uId = Object.assign({}, this.state.UserLogin);
    // uid = {  userid: "",email: "",}
    uId.userid = e.target.value;
    this.setState({ UserLogin: uId });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="firstName"
                onChange={this.handleInputData}
                value={this.state.firstName}
              />
              {this.validator.message(
                "firstName",
                this.state.firstName,
                "required|min:5"
              )}
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lastName"
                onChange={this.handleInputData}
                value={this.state.lastName}
              />
              {this.validator.message(
                "lastName",
                this.state.lastName,
                "required|min:5"
              )}
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="mobileNo"
                onChange={this.handleInputData}
                value={this.state.mobileNo}
              />
              {this.validator.message(
                "mobileNo",
                this.state.mobileNo,
                "required|phone"
              )}
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter UserID"
                onChange={this.handleUserID}
                value={this.state.UserLogin.userid}
              />
              {this.validator.message(
                "userid",
                this.state.UserLogin.userid,
                "required"
              )}
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Address"
                onChange={this.handleEmail}
                value={this.state.UserLogin.email}
              />
              {this.validator.message(
                "Email",
                this.state.UserLogin.email,
                "required|email"
              )}
            </div>
            <button type="sumbit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Form;
