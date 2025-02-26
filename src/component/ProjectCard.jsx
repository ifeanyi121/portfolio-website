import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";


const ProjectCard = (props) => {
    const projectImages = props.images || [];
    const projectVideos = props.videos || [];

    return (
        <section id="ProjectCard">
            <div className="project-card">
                <h3>{props.title}</h3>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {projectImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Project slide ${index + 1}`}
                                    style={{ width: '100%', height: '500px', objectFit: 'contain' }}
                                />


                            </SwiperSlide>
                        ))}

                        {projectVideos.map((video, index) => (
                            <SwiperSlide key={`vid-${index}`}>
                                <video
                                    controls
                                    preload="metadata"
                                    style={{ width: '100%', height: '500px', objectFit: 'scale-down' }}
                                >
                                    <source src={video} type="video/mp4" />
                                    Your browser doesn't support this video format.
                                </video>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <p>{props.text}</p>
            </div>
        </section>
    );
};

export default ProjectCard;