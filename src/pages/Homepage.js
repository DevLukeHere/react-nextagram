// Importing Section
import React from 'react';
import '../App.css';
import axios from 'axios';
import styled from 'styled-components';
import UserImages from '../containers/userImages';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'


// Styling Section
const Section = styled.div`
display: flex;
border: solid 1px black;
flex-direction: column;
align-items: center;
`
const ProfilePic = styled.img`
border-radius: 50%;
` 
const ImagesDiv = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
`

// Components Section
class Homepage extends React.Component {
  state = {
    users: [],
    isLoading: true,
  }

  componentDidMount() {
    // performing a GET request
    axios('https://insta.nextacademy.com/api/v1/users')
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
  render() {
    if (this.state.isLoading) {
      return <Loading fullPage={true} />
    }
    return (
      <div id="body">
        {
          <div>
            <div>
              {
                this.state.users.map(user => {
                  return (
                    <Section key={user.id}>
                      <div>
                      <Link className="username" to={`/users/${user.id}`}>{user.username}</Link> 
                      <Link to={`/users/${user.id}`}><ProfilePic width='150px' src={user.profileImage} /></Link>
                      </div>

                      <ImagesDiv>
                        <UserImages id={user.id} />
                      </ImagesDiv>
                    </Section>
                  )
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Homepage;