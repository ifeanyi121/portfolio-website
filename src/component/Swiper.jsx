import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slideshow() {
    const images = [
        "my-portfolio/src/images/UiPic1.png",
        "my-portfolio/src/images/UiPic2.png",
        "my-portfolio/src/images/UiPic3.png",
        "my-portfolio/src/images/UiPic4.png"

    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
            {props.videos && props.videos.map((video, index) => (
                <SwiperSlide key={`vid-${index}`}>
                    <video
                        controls
                        autoPlay={false}
                        style={{ width: '100%', height: '500px', objectFit: 'fill' }}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}