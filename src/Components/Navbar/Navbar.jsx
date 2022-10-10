import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/dialogs">Dialogs</Link>
            </div>
            <div className={s.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={s.item}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    );
}

export default Navbar;