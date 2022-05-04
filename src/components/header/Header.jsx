import React from 'react'
import './header.css'
import CTA from './CTA'

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello World</h5>
                <h1>Colton Aylix</h1>
                <h4 className="text-light">Fullstack Developer</h4>

                <CTA />
            </div>
        </header>
    )
}
