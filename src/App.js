import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Preloader from './Components/Common/Preloader/Preloader';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/Pages/News/News';
import Music from './Components/Pages/Music/Music';
import Settings from './Components/Pages/Settings/Settings';
import Footer from './Components/Footer/Footer';
import UsersContainer from './Components/Pages/Users/UsersContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Pages/Login/Login";
import { connect } from 'react-redux';
import { appInitializer } from './Redux/appReducer';
const DialogsContainer = React.lazy(() => import('./Components/Pages/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Pages/Profile/ProfileContainer'));

function App(props) {
  useEffect(() => {
    props.appInitializer();
    // eslint-disable-next-line
  }, []);

  // const catchAllUnhandledErrors = (promiseRecetionEvent) => {
  //   alert(promiseRecetionEvent);
  //   console.error('Some error occured', promiseRecetionEvent);
  // }

  // useEffect(() => {
  //   window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
  //   console.log('component mounted');

  //   return () => {
  //     window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
  //     console.log('component unmount');
  //   }
  // }, []);

  if (props.appInit) {
    return (
      <div className="appWrapper">
        <HeaderContainer />
        <Navbar />
        <div className="contentWrapper">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="profile/" element={<ProfileContainer />} />
              <Route path="profile/:profileID" element={<ProfileContainer />} />
              <Route path="dialogs/*" element={<DialogsContainer />} />
              <Route path="users" element={<UsersContainer />} />
              <Route path="news" element={<News />} />
              <Route path="music" element={<Music />} />
              <Route path="settings" element={<Settings />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    )
  } else {
    <Preloader />
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

