import React from 'react'
import './nav.css'
import Socials from './Socials'
import { RiHome2Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import { BiBookAlt } from 'react-icons/bi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <section className='container nav__container'>
            <nav>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome2Line /></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiCodeSSlashFill /></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
            </nav>

            <Socials />

        </section>
    )
}
