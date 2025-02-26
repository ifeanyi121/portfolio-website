import React from "react";
import image from "../images/img2.png";
import Card from "../component/Card.jsx"

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
                <div className="content-container">
                    <div className="card-container">
                        <Card  title="Skills"  content={[
                            "Frontend Development",
                            "Machine Learning",
                            "IoT",
                            "Database Management",
                            "Cybersecurity"
                        ]} />
                        <Card title="Education"
                              content={[
                                  "B.Sc. Computer and Electrical Engineering",
                                  "M.Sc. in Computer Science (Ongoing)",
                                  "Cybersecurity Training"
                              ]} />
                    </div>
                    <div>
                        <p className="about-text">
                            I would like to be a part of an Organisation where I could use and
                            enhance my knowledge and talent for both the Organisation and myself.
                            Delivering honesty and devotion towards my job.
                        </p>
                    </div>

            </div>





        </section>
    );
};

export default About;