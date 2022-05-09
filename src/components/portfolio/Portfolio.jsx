import React from 'react'
import './portfolio.css'
import APEXSITE from '../../styles/images/apex-web-app.png'
import PORTFOLIOSITE from '../../styles/images/portfolio-pic.png'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>-</h5>
            <h2>My Work</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={PORTFOLIOSITE} alt="this portfolio" />
                    </div>
                    <h3>This Site</h3>
                    <p className='portfolio__item-description'>
                        Portfolio that will continuosly be altered and worked on over time.
                    </p>
                    <p><b>Frontend:</b> HTML, CSS, React</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Aylixx/Portfolio" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                        <a href="" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Site</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={APEXSITE} alt="apex legends stats website" />
                    </div>
                    <h3>'Apex Legends' Stats</h3>
                    <p className='portfolio__item-description'>
                        Web-app for searching 'Apex Legends' players and retrieving up to date stats. The design/style is meant to match the game aesthetic.
                    </p>
                    <p className='portfolio__example'>
                        *Example Search: Click the Xbox icon (left) and search for the user 'oakleighh'
                    </p>
                    <br />
                    <p><b>Frontend:</b> HTML, CSS, JavaScript</p>
                    <p><b>Backend:</b> Node.js, Express</p>
                    <p><b>View Engine:</b> EJS</p>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Aylixx/Apex-Tracker" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                        <a href="https://apexlegends-stats.herokuapp.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Site</a>
                    </div>
                </article>
            </div>
            <div className="note">
                <p>
                    NOTE: <br /> Due to very recently completing university, I have not had time to complete all the projects I'd wish. I am currently working on more that utilize databases and payment systems for things such as eCommerce.
                </p>
            </div>
        </section>
    )
}
