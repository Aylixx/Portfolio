import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pntavvu', 'template_q7b8e6c', form.current, 'FRmWi2UZwgNxj_FBG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section id='contact'>
            <h5>-</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
