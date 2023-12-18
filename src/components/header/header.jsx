import React from 'react';
import './style.css';

class Header extends React.Component{

    render() {
        return <header className='header__main'>
            <a href="#" className='header__logo'>logo</a>
            <ul className='header__menu'>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">comments</a></li>
            </ul>
        </header>
    }
}

export default Header