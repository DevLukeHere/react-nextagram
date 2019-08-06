// Importing Section
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import styled from 'styled-components';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import NavModal from './Modal'


// Styling Section
const CustomNavbar = styled(Navbar)`
background-color: #e4f9f5;
`
const CustomNavBrand = styled(NavbarBrand)`
font-family: 'Pacifico', cursive;
color: #40514e;
font-size: 30px;
margin-left: -25px;
`
const CustomNavLink = styled(NavLink)`
a {
  color: inherit;
}
`

const CustomLogo = styled.img`
height: 70px;
width: 110px;
`
const CustomBtn = styled(Button)`
font-family: 'Lobster Two', cursive;
font-weight: bold;
color: #40514e;
font-size: 20px;
background-color: #30e3ca;
border: 0px;
`

// Bootstrap Navigation Bar Section
export default class AppNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showModal: false,
      showLogin: null,
    };
  }
  
  componentDidMount() {
    this.showUserLogin()
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  showUserLogin = () => {
    if (localStorage.getItem('JWT')) {
      this.setState({
        showLogin: true
      })
    } else {
      this.setState({
        showLogin: false
      })
    }
  }


showUserLogout = () => {
  localStorage.removeItem('JWT')
  this.showUserLogin()
}

render() {
  return (
    <div>
      <CustomNavbar light expand="md">

        <Link to="/">
          <CustomLogo src={logo} alt="logo"></CustomLogo>
          <CustomNavBrand href="/">Nextagram</CustomNavBrand>
        </Link>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem>
              {this.state.showLogin ? <CustomBtn onClick={this.showUserLogout}>Log Out</CustomBtn> : <CustomBtn onClick={this.toggleModal}>Log In</CustomBtn>}
            </NavItem>
          </Nav>
        </Collapse>
      </CustomNavbar>
      <NavModal showUserLogin={this.showUserLogin} isOpen={this.state.showModal} toggle={this.toggleModal} />
    </div>
  );
}
}