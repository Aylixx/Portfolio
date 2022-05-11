import React from 'react'
import './footer.css'
import logo from '../../styles/images/logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="container footer__container">
                <a href="#" className='footer__logo'>
                    <img src={logo} alt="" />
                </a>

                <div className="footer__list">
                    <ul>
                        <li><a href="#">Top</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
