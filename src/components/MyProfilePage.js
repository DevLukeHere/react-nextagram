import React from 'react';
import axios from 'axios'

// Bootstrap Navigation Bar Section
export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  componentDidMount() {
    // performing a GET request
    axios('https://insta.nextacademy.com/api/v1/images/me')
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({ })
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }

render() {
  return (
    <div>
      
    </div>
  );
}
}

