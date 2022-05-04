import React from 'react'
import './experience.css'
import { SiHtml5, SiJava, SiCsharp, SiExpress, SiCss3, SiJavascript, SiNodedotjs, SiLinux, SiAdobephotoshop, SiAdobexd, SiMongodb, SiGithub } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'

export default function Experience() {
    return (
        <section id='experience'>
            <h5>-</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__main">
                    <h3>Main Technologies</h3>
                    <div className="experience__main-content">
                        <article className='experience__details'>
                            <SiHtml5 />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <SiCss3 />
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <SiJavascript />
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience__details'>
                            <GrReactjs />
                            <h4>React</h4>
                        </article>
                        <article className='experience__details'>
                            <SiNodedotjs />
                            <h4>Node.js</h4>
                        </article>
                        <article className='experience__details'>
                            <SiJava />
                            <h4>Java</h4>
                        </article>
                        <article className='experience__details'>
                            <SiCsharp />
                            <h4>C#</h4>
                        </article>
                        <article className='experience__details'>
                            <SiExpress />
                            <h4>Express</h4>
                        </article>
                        <article className='experience__details'>
                            <SiLinux />
                            <h4>Linux</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__other">
                    <h3>Other Skills</h3>
                    <div className="experience__other-content">
                        <article className='experience__details'>
                            <SiAdobephotoshop />
                            <h4>PhotoShop</h4>
                        </article>
                        <article className='experience__details'>
                            <SiGithub />
                            <h4>GitHub</h4>
                        </article>
                        <article className='experience__details'>
                            <SiAdobexd />
                            <h4>Xd</h4>
                        </article>
                    </div>
                    <p>
                        I enjoy the design process of frontend development, and have a lot of experience with photoshop and have been learning Xd to better plan out projects. I am also familiar with Git , as I had to use it all throughout university. <br />
                        <br />
                        I currently enjoy developing in the MERN stack, and am working on some prejects that implement databases and payment systems.
                    </p>
                </div>
            </div>
        </section>
    )
}
