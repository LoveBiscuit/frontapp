/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import s from './Header.module.css'
import logo from '../../Assets/Images/logo.webp'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.appLogo}>
                <Link to="/"><img src={logo} /></Link>
            </div>
            <div className={s.miniProfile}>
                test
            </div>
        </header>
    );
}

export default Header;