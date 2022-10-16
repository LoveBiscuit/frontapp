/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <Link to="/"><img src="https://i.pinimg.com/originals/5f/53/5a/5f535aa08b3230f893f2a68e74eebf44.png" /></Link>
        </header>
    );
}

export default Header;