import React from 'react';
import styled from 'styled-components';
import LoadingSvg from './rolling.svg'

const LoadImage = styled.img `
width: 200px;
height: 200px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`


class Loading extends React.Component {
  
  render() {
    return (
      <div>
        {
          this.props.fullPage ? 
          <LoadImage src={LoadingSvg}></LoadImage> : 
          <img src={LoadingSvg} alt="loading-img" />
        }
      </div>
    )
  }
}

export default Loading;