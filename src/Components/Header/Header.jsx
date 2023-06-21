/* eslint-disable jsx-a11y/alt-text */
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css'
import logo from '../../Assets/Images/logo.webp'

function Header(props) {
    if (props.isAuth === false) {
        return (
            <header className={s.header}>
                <div className={s.appLogo}>
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className={s.loginBlock}>
                    <div className={s.signinButton}>
                        <NavLink to={'/login'}>Sign in</NavLink>
                    </div>
                    <div className={s.signupButton}>
                        <NavLink to={'/register'}>Sign up</NavLink>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className={s.header}>
                <div className={s.appLogo}>
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className={s.loginBlock}>
                    <div className={s.miniProfile}>
                        <div>
                            <NavLink to={`/profile`}>{props.login}</NavLink>
                        </div>
                        <div>
                            <NavLink onClick={props.logout} to={`/profile/`}>Выйти</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;