// // Importing Section
import React from 'react';
import { Modal } from 'reactstrap';
import LogIn from './Login';
import SignUp from './Signup';

class NavModal extends React.Component {
  state = {
    isLoginForm: true
  }

  changeForm = () => {
    this.setState({ isLoginForm: false })
  }

  changeForm1 = () => {
    this.setState({ isLoginForm: true })
  }


  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        {
          this.state.isLoginForm ? <LogIn showUserLogin={this.props.showUserLogin} changeToSignUp={this.changeForm} toggleClose={this.props.toggle} /> : <SignUp changeToLogin={this.changeForm1} toggleClose={this.props.toggle} />
        }
      </Modal>
    );
  }
}

export default NavModal;

