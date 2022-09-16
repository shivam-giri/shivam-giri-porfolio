import React from "react";
import './Portfolio.css';
import IMG1 from '../../assests/Home/tablez.png';
import IMG2 from '../../assests/Home/lrnr.png';
import IMG3 from '../../assests/Home/newlook.png';
import IMG4 from '../../assests/Home/xp-power.png';
import IMG5 from '../../assests/Home/1800-flower.png';
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
    title : 'Tablez',
    desc : '- E-commerce Website created using NuxtJs',
    demo : 'https://tablez.com/'

  },
  {
    id : 2,
    image : IMG2,
    title : 'LrNr',
    desc : '- Learning plateform for students by watching videos and attemplting Quiz.',
    demo : 'https://lrnr.in/'

  },
  {
    id : 3,
    image : IMG3,
    title : 'New Look',
    desc : '- IR site of New Look Group developed on Sitecore CMS',
    demo : 'https://www.newlookgroup.com/'

  },
  {
    id : 4,
    image : IMG4,
    title : 'Xp - Power',
    desc : '- Investor relation site developed on Sitecore CMS',
    demo : 'https://corporate.xppower.com/'

  },
  {
    id : 5,
    image : IMG5,
    title : '1-800 Flower',
    desc : '- Investor relation site developed on Sitecore CMS',
    demo : 'https://www.1800flowersinc.com/'

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
          data.map(({id, image, title, desc, demo}) => {
            return(
              <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title} <span className="description">{desc}</span></h4>
              <div className="cta-wrapper luxury">
                  <a href={demo} className="glow-on-hover" target="_blank" rel="noreferrer">Visit Site</a>
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