import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Pages/Profile/Profile';
import Dialogs from './Components/Pages/Dialogs/Dialogs';
import News from './Components/Pages/News/News';
import Music from './Components/Pages/Music/Music';
import Settings from './Components/Pages/Settings/Settings';
import Footer from './Components/Footer/Footer';

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar data={props.data.friendsList} />
      <div className="contentWrapper">
        <Routes>
          <Route path="/" element={<Profile data={props.data} dispatch={props.dispatch} />} />
          <Route path="profile" element={<Profile data={props.data} dispatch={props.dispatch} />} />
          <Route path="dialogs/*" element={<Dialogs data={props.data} dispatch={props.dispatch} />} />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
