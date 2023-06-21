import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/Pages/News/News';
import Music from './Components/Pages/Music/Music';
import Settings from './Components/Pages/Settings/Settings';
import Footer from './Components/Footer/Footer';
import DialogsContainer from "./Components/Pages/Dialogs/DialogsContainer";
import UsersContainer from './Components/Pages/Users/UsersContainer';
import ProfileContainer from "./Components/Pages/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Pages/Login/Login";
import { connect } from 'react-redux';
import { appInitializer } from './Redux/appReducer';
import Preloader from './Components/Common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.appInitializer();
  }

  render() {
    console.log(this.props.appInit);
    if (this.props.appInit) {
      return (
        <div className="appWrapper">
          <HeaderContainer />
          <Navbar />
          <div className="contentWrapper">
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="profile/" element={<ProfileContainer />} />
              <Route path="profile/:profileID" element={<ProfileContainer />} />
              <Route path="dialogs/*" element={<DialogsContainer />} />
              <Route path="users" element={<UsersContainer />} />
              <Route path="news" element={<News />} />
              <Route path="music" element={<Music />} />
              <Route path="settings" element={<Settings />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )
    } else {
      <Preloader />
      console.log('оно загружается...');
    }
  }
}

function mapStateToProps(state) {
  return {
    appInit: state.app.initialized
  }
}

export default connect(mapStateToProps, {
  appInitializer
})(App);

