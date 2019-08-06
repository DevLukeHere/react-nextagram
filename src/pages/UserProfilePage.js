// Importing Section
import React from "react"
import axios from 'axios';
import styled from 'styled-components';
import UserImages from '../containers/userImages';

// Styling Section
const ProfilePic = styled.img`
border-radius: 50%;
`
const Section = styled.div`
display: flex;
border: solid 1px black;
flex-direction: column;
align-items: center;
`

// Component Section
class UserProfilePage extends React.Component {
  state = {
    users: [],
  }

componentDidMount() {
  // performing a GET request
  axios(`https://insta.nextacademy.com/api/v1/users/${this.props.match.params.id}`)
    .then(result => {
      // If successful, we do stuffs with 'result'
      this.setState({ users: result.data, isLoading: false })
    })
    .catch(error => {
      // If unsuccessful, we notify users what went wrong
      console.log('ERROR: ', error)
    })
}


// Rendering Section
// class UserProfilePage extends React.Component {
  render() {
    return (
      <Section>
      <div>
      <p>{this.state.users.username}</p>
      <ProfilePic width='150px' src={this.state.users.profileImage}/>
      </div>

      <div>
      <UserImages isProfilePage id={this.props.match.params.id}/>
      </div>
      </Section>
    )
  }
}

export default UserProfilePage