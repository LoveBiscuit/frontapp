import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/Pages/News/News';
import Music from './Components/Pages/Music/Music';
import Settings from './Components/Pages/Settings/Settings';
import Footer from './Components/Footer/Footer';
import DialogsContainer from "./Components/Pages/Dialogs/DialogsContainer";
import UsersContainer from './Components/Pages/Users/UsersContainer';
import ProfileContainer from "./Components/Pages/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="contentWrapper">
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="profile/*" element={<ProfileContainer />} />
          <Route path="dialogs/*" element={<DialogsContainer />} />
          <Route path="users" element={<UsersContainer />} />
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
