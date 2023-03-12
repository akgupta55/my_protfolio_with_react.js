import React from 'react'
import "../Styles/about.css";
import profile_pic from "../assets/profile.jpg"

const About = () => {
    return (
        <section id="about">
            {/* <!-- about left  --> */}
            <div className="about-left">
                <img src={profile_pic} alt="About Img" />
            </div>

            {/* <!-- about right  --> */}
            <div className="about-right">
                <h4>My Story</h4>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat a dolorem at similique maxime dolorum dolore
                    enim dicta voluptatibus, illum recusandae, vel optio tempore
                    ipsum incidunt eum. Aspernatur, repellendus.
                </p>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span className="saprater">:</span>
                            <p>Jaipur, Rajasthan, India</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span className="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span className="saprater">:</span>
                            <p>crowncoder@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="expertise">
                    <h3>My Expertise</h3>
                    <ul>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-html5"></i>
                            </span>
                            <p>HTML</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-css3-alt"></i>
                            </span>
                            <p>CSS</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-node-js"></i>
                            </span>
                            <p>Java Script</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-react"></i>
                            </span>
                            <p>React Js</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default About
