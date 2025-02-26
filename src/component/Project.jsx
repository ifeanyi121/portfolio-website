import React from "react";
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// Import first set of images
import image1 from "../images/UiPic1.png";
import image2 from "../images/UiPic2.png";
import image3 from "../images/UiPic3.png";
import image4 from "../images/UiPic4.png";

import video1 from "../images/trashcanVid1_muted.mp4";
import video2 from "../images/trashcanVid.mp4";


// Import third set of images
import cnnPic1 from "../images/CnnPic1.png";
import cnnPic2 from "../images/CnnPic2.png";


import 'swiper/swiper-bundle.css';
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    const javaUiImages = [image1, image2, image3, image4];
    const project1Videos = [video2,video1];
    const cnnImages = [cnnPic1, cnnPic2];



    return (
        <section id="projects">
            <h2>Projects</h2>
            <ProjectCard title="Experience with Java and Mysql database" text="Designed and developed a user-friendly Java UI
             for interaction
             with MySQL using the JDBC connector." images={javaUiImages} />
            <ProjectCard title="Experience with Ardiuno and cloud base IOT" text="Developed an automated trash bin with a sensor-driven mechanism that detects motion, opens automatically, and monitors its fill level for efficient waste management."  videos={project1Videos}  />
            <ProjectCard title="Experience with Raspberry pi ,Neural Network and Computer vision Technology (Edge Computing) " text="Developed and deployed a machine learning model on a Raspberry Pi to accurately distinguish between safe and distracted driving behaviors in real time. The model detects distractions such as eating or mobile phone usage while driving and was successfully tested in real-world conditions." images={cnnImages}  />

        </section>
    );
};

export default Projects;