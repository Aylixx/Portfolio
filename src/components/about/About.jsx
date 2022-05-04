import React from 'react'
import './about.css'
import PFP from '../../styles/images/pfp.png'
import { FaGraduationCap } from 'react-icons/fa'

export default function About() {
    return (
        <section id='about'>
            <h5>-</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={PFP} alt="me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__education">
                        <article className='about__education-card'>
                            <FaGraduationCap className='about__education-icon' />
                            <h3>Education</h3>
                            <p>
                                B.Sc. Computer Science <br />
                                Mount Royal University (2022)<br />
                                Calgary, AB
                            </p>
                        </article>
                    </div>
                    <p className='about__info'>
                        I studied web development in my last year of university and became obsessed with it. Web development allows me to think logically, while also engaging my creative side. I love learning, and with my foundation in Computer Science I am able to pick up new technologies quickly.
                    </p>
                </div>
            </div>

            {/* <a href="#contact" className='btn btn-primary'>Get In Touch</a> */}
        </section>
    )
}
