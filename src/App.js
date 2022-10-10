import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Pages/Profile/Profile';
import Dialogs from './Components/Pages/Dialogs/Dialogs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="contentWrapper">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs" element={<Dialogs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
