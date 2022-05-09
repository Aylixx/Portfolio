import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default function HeaderSocials() {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/colton-aylix-3aa859239/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/Aylixx?tab=overview&from=2022-04-01&to=2022-04-30" target='_blank' rel='noreferrer'><BsGithub /></a>
            {/* <a href="https://twitter.com" target='_blank' rel='noreferrer'><BsTwitter /></a> */}
        </div >
    )
}
