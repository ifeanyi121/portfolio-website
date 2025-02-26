import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Name: Ifeanyi Obi </h2>
            <p>Email: OBI2@MARSHALL.EDU</p>
            <p>LinkedIn:    <a href="https://linkedin.com/in/ifeanyi-obi-5235ba308" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
             Click Here</a>
            </p>
            <p>Github:   <a href="https://github.com/ifeanyi121" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                Click Here</a>
            </p>

        </section>
    );
};

export default Contact;