import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';

function Navbar(props) {
    return (
        <div className={s.wrapper}>
            <nav className={s.navBar}>
                <h4>Navigation</h4>
                <div className={s.item}>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : ""}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : ""}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={({ isActive }) => isActive ? s.active : ""}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={({ isActive }) => isActive ? s.active : ""}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? s.active : ""}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.friendsBar}>
                <h4>Friends</h4>
                <Friends data={props.data} />
            </div>
        </div>
    );
}

export default Navbar;