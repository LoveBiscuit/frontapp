import React from 'react';
import s from './Preloader.module.css';
import preloaderAnimation from '../../../Assets/Animations/loader.png';

function Preloader(props) {
    return (
        <div>
            <img className={s.loader} src={preloaderAnimation} alt='loading animation' />
        </div>
    )
}

export default Preloader;