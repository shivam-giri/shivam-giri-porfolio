import React from "react";
import './Portfolio.css';
import IMG1 from '../../assests/Home/award.jpg';
import { Navigation, Pagination } from 'swiper';
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css /scrollbar';
const data = [
  {
    id : 1,
    image : IMG1,
    title : 'git hub live profile search',
    github : 'github.com',
    demo : 'https://github.com/shivam-giri'

  },
  {
    id : 2,
    image : IMG1,
    title : 'git hub live profile search',
    github : 'github.com',
    demo : 'https://github.com/shivam-giri'

  },
  {
    id : 3,
    image : IMG1,
    title : 'git hub live profile search',
    github : 'github.com',
    demo : 'https://github.com/shivam-giri'

  },
  {
    id : 4,
    image : IMG1,
    title : 'git hub live profile search',
    github : 'github.com',
    demo : 'https://github.com/shivam-giri'

  }
]
const Portfolio = () =>{
  return(
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <Swiper className="container portfolio__container" 
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      // slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
            modules={[Navigation, Pagination,EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
      >
         {
          data.map(({id, image, title, github, demo}) => {
            return(
              <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <div className="cta-wrapper">
                  <button href={github} className="btn primary-btn">Github</button>
                  <a href={demo} className="btn btn-priary" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </SwiperSlide>
  
            )
          })
         } 
                    
      </Swiper>
    </section>
  )
}

export default Portfolio;