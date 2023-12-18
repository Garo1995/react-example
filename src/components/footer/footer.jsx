import React from 'react';
import './style.css';

class Footer extends React.Component{
    render() {
        return <footer>
            <a href="#" className='header__logo'>logo</a>
            <ul className='header__menu'>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">comments</a></li>
            </ul>
        </footer>
    }
}

export default Footer