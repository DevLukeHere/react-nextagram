import React from 'react';
import '../App.css';
import axios from 'axios';
import Loading from '../components/Loading';
import Placeholder from 'react-graceful-image';


class userImages extends React.Component {
  state = {
    images: [],
    isLoading: true,
  }

  componentDidMount() {
    // performing a GET request
    axios(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.id}`)
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({ images: result.data, isLoading: false })
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }
    return (
      <>
        {
         this.state.images.map((image, index) => {
          return (
            <div key={`${image}-${index}`}>
              <Placeholder width="200px" src={image} />
            </div>
            )
          })
        }
      </>
    )
  }
}


export default userImages;