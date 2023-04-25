import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Pages/Profile/Profile';
import News from './Components/Pages/News/News';
import Music from './Components/Pages/Music/Music';
import Settings from './Components/Pages/Settings/Settings';
import Footer from './Components/Footer/Footer';
import DialogsContainer from "./Components/Pages/Dialogs/DialogsContainer";

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar store={props.store}/>
      <div className="contentWrapper">
        <Routes>
          <Route path="/" element={<Profile store={props.store} />} />
          <Route path="profile" element={<Profile store={props.store} />} />
          <Route path="dialogs/*" element={<DialogsContainer store={props.store} />} />
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
