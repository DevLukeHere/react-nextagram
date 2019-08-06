// Importing Section
import React from 'react';
import Homepage from './pages/Homepage'
import { Route } from "react-router-dom"
import UserProfilePage from './pages/UserProfilePage'
import AppNav from './components/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MyProfilePage from './components/MyProfilePage'

// Rendering Section
class App extends React.Component {
  render() {
    return (
      <div>
        <ToastContainer/>
        <AppNav />
        <Route exact path="/" component={Homepage} />
        <Route path="/users/:id" component={UserProfilePage} />
        <Route exact path="/profile" component={MyProfilePage} />
      </div>
    )
  }
}

export default App;