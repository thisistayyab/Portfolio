import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import client1 from '../assets/client-1.webp';
import client2 from '../assets/client-2.webp';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

function Clients() {
  return (
    <section className="section__container client__container" id="client">
      <p className="section__subheader">Testimonials</p>
      <h2 className="section__header">What Our Clients Say About Us</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        <SwiperSlide>
          <div className="client__card">
            <img src={client1} alt="client" />
            <div>
              <p>
                He brought our vision to life with a stunning, modern website that not only looks great but also performs flawlessly across all devices. His attention to design detail, user experience, and responsiveness exceeded our expectations. We've received countless compliments, and our online engagement has significantly improved. Truly the best in web design!
              </p>
              <h4>Kashif Shakeel <span>CEO, Corporation</span></h4>
              <div className="client__ratings">
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarLine /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client__card">
            <img src={client2} alt="client" />
            <div>
              <p>
                His expertise in managing our Shopify store has been a game-changer. From product listings to seamless integrations and performance optimization, everything is handled with precision. Our sales have increased, the customer experience has improved, and we finally have peace of mind knowing our store is in expert hands.
              </p>
              <h4>Hafiz Abeer Ahmad <span>Marketing Director</span></h4>
              <div className="client__ratings">
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
                <span><RiStarFill /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Clients; 