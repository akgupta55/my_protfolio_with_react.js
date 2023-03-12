import React from 'react'
import "../Styles/contact.css";
import MyPDF from '../File/akgupta.pdf';

import { FaGithubSquare, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaTelegram, FaDownload } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <div className="footer">
                <div className="soical">
                    <h1>Contact Me</h1>
                    <a className="mail" href={"mailto:agupta55544@gmail.com"}><FaTelegram />  agupta55544@gmail.com</a>
                    <p><FaPhoneAlt /> +91-7398676607</p>
                    <div className="sc_icon">
                        <a className="iconG" href={"https://github.com/akgupta55"}><FaGithubSquare /></a>
                        <a className="iconL" href={"https://www.linkedin.com/in/ajay-kumar-gupta-011a021b5/"} ><FaLinkedinIn /></a>
                        <a className="iconI" href={"https://www.instagram.com/a_k_gupta555/"}><FaInstagramSquare /></a>
                    </div>

                    <a className="file" href={MyPDF} download="My_Resume.pdf"> Download CV <FaDownload /> </a>
                </div>
                <div className="feedback">
                    <form className='msg' action="">
                        <input className="boxI" type="text" placeholder="Your Name..." />
                        <input className="boxI" type="email" placeholder="Your Email..." />
                        <textarea className="box" placeholder="Your Message..." name="msg" id="msg" cols="30" rows="10"></textarea>
                        <input className="submit" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
