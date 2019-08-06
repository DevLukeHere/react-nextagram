// Importing Section
import React from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  getUsername = (event) => {
    this.setState({username: event.target.value});
  }

  handleSubmit = () => {
    this.props.toggleClose()
  }

  getPassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = () => {
    axios({
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(response => {
        console.log(response)
        toast('You are logged in')
        localStorage.setItem('JWT',response.data.auth_token)
        this.props.showUserLogin()
      })
      .catch(error => {
        console.error(error.response)
        toast('Unsuccessful login')
      })

    this.props.toggleClose()
  }

  render() {
    
    return (
      <>
        <ModalHeader>Login</ModalHeader>

        <ModalBody>
          <Form>

            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input onChange = {this.getUsername} value = {this.state.username} type="username" name="username" id="exampleUsername" placeholder="Enter username" />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange = {this.getPassword} value = {this.state.password} type="password" name="password" id="examplePassword" placeholder="Enter password" />
            </FormGroup>
          </Form>

          <Label>New member?
              <button onClick={this.props.changeToSignUp}>Sign up here.</button>
          </Label>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" disabled={this.state.username === "" || this.state.password === ""}  onClick={this.handleSubmit}>Log In</Button>
          {' '}
          <Button color="secondary" onClick={this.props.toggleClose}>Cancel</Button>
        </ModalFooter>
      </>
    );
  }
}

export default LogIn;