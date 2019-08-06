// Importing Section
import React from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import axios from 'axios'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      usernameValid: null,
    };
  }

  handleSubmit = () => {
    axios({
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/users/',
      data: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error.response)
      })

    this.props.toggleClose()
  }

  handleInput = e => {
    let x = { ...e };
    let delay = setTimeout(() => this.handleUsernameCheck(x), 300);
    this.setState({
      [e.target.name]: e.target.value,
      delay
    });
  };

  handleUsernameCheck = e => {
    const newUsername = e.target.value;
    if (newUsername.length >= 6) {
      axios.get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
      ).then(response => {
        if (response.data.valid) {
          this.setState({
            usernameValid: true
          });
        } else {
          this.setState({
            usernameValid: false
          });
        }
      });
    }
  }

  render() {
  
    return (
      <div>
        <ModalHeader>Sign Up</ModalHeader>

        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input onChange={e => {
                if (this.state.delay) {
                  clearTimeout(this.state.delay);
                }
                this.handleInput(e);
              }}
                {...(this.state.username.length >= 6
                  ? this.state.usernameValid
                    ? { valid: true }
                    : { invalid: true }
                  : this.state.username.length > 0
                    ? { invalid: true }
                    : "")}
                value={this.state.username} type="text" name="username" id="exampleUsername" placeholder="Enter a username with minimum 6 characters" />

              <FormFeedback
                {...(this.state.username.length > 0 && this.state.username.length >= 6
                  ? this.state.usernameValid
                    ? { valid: true }
                    : { invalid: true }
                  : { invalid: true })}
              >
                {this.state.username.length >= 6
                  ? this.state.usernameValid
                    ? "Sweet, this username is available!"
                    : "Sorry, this username is taken!"
                  : "Must be minimum 6 characters"}
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="Enter email" />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.handleInput}
                {...(this.state.password.length >= 8 ? { valid: true } : this.state.password.length > 0 ? { invalid: true } : "")}
                value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password must be minimum 8 characters" />

              <FormFeedback>
                {this.state.password.length < 8 ? "Must be minimum 8 characters" : null}
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="exampleConfirmPassword">Confirm Password</Label>
              <Input {...(this.state.confirmpassword < 1 ? null : this.state.password === this.state.confirmpassword ? { valid: true } : { invalid: true })}
                type="password" name="confirmpassword" id="exampleConfirmPassword" placeholder="Re-enter password" onChange={this.handleInput} />

              <FormFeedback {...(this.state.password === this.state.confirmpassword && this.state.confirmpassword < 1 ? null : this.state.password === this.state.confirmpassword ? { valid: true }  : { valid: false })}>
                {this.state.password === this.state.confirmpassword ? "Password matches!" : "Password does not match!"}
              </FormFeedback>
            </FormGroup>
          </Form>

          <Label>Already a member?
            <button onClick={this.props.changeToLogin}>Log in here.</button>
          </Label>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" disabled={this.state.username === "" || this.state.password === "" || this.state.email === ""} onClick={this.handleSubmit}>Sign Up</Button>
          {' '}
          <Button color="secondary" onClick={this.props.toggleClose}>Cancel</Button>
        </ModalFooter>
      </div>
    );
  }
}
export default SignUp;