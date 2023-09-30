import {
  Container,
  SectionLink,
  SectionTtl
} from "../GeneralComponents/SectionTtlLinkStyles";
import Stars from '../../assets/icons/ReviewsStars.png'
import Brackets from '../../assets/icons/ReviewsBrackets.png'
import RevImg from '../../assets/imgs/ReviewsImg.png'
import {
  ReviewsSection, ReviewBox,
  ReviewInfo, ReviewImg
} from "./ReviewsStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { useSwiper } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import styled from "styled-components";


export const Reviews = () => {
  // const swiper = useSwiper();
  return (
    <ReviewsSection>
      <Container>
        <SectionTtl>Что говорят наши клиенты</SectionTtl>
        <SectionLink>Quis pretium suspendisse.</SectionLink>
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <ReviewBox>
              <ReviewInfo>
                <img src={Brackets} alt="" />
                <p>
                  Eu facilisis duis pulvinar dui sapien vestibulum. blandit euismod. Odio varius sitsapien aliquet aliquam quis et tellus velit bibendum.
                  Iaculis eu convallis egestas a mattis viverra.

                </p>
                <div className="rate">
                  <b>Марго Самойлова</b>
                  <span>29.11.2022г</span> <br />
                  <img src={Stars} alt="rate" />
                  <SwiperNavButtons />
                </div>
              </ReviewInfo>
              <ReviewImg>
                  <img src={RevImg} alt="" />
                </ReviewImg>
            </ReviewBox>
          </SwiperSlide>
          <SwiperSlide><ReviewBox>
            <ReviewInfo>
              <img src={Brackets} alt="" />
              <p>
                Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed
                ridiculus iaculis eget egestas blandit euismod. Ligula senectus
                egestas cras risus sodales commodo. Enim nec neque sodales quis
                sit massa posuere. Id eget ultrices tempus sit id donec feugiat.
                Congue aliquet tristique egestas dictum tincidunt ac. Odio varius
                sitsapien aliquet 
              </p>
              <div className="rate">
                <b>Марго Самойлова</b>
                <span>29.11.2022г</span> <br />
                <img src={Stars} alt="rate" />
                <SwiperNavButtons />
              </div>
            </ReviewInfo>
            <ReviewImg>
                <img src={RevImg} alt="" />
              </ReviewImg>
          </ReviewBox></SwiperSlide>
          <SwiperSlide><ReviewBox>
            <ReviewInfo>
              <img src={Brackets} alt="" />
              <p>
                Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed
                ridiculus iaculis eget egestas blandit euismod. Ligula senectus
                egestas cras risus sodales commodo. Enim nec neque sodales quis
                sit massa posuere. Id eget ultrices tempus sit id donec feugiat.
                Congue aliquet tristique egestas dictum tincidunt ac. Odio varius
                sitsapien aliquet aliquam quis et tellus velit bibendum. Quis
                pretium vitae suspendisse at. Iaculis eu convallis egestas a
                mattis viverra. Id leo sollicitudin mattiId leo sollicitudin matti
              </p>
              <div className="rate">
                <b>Марго Самойлова</b>
                <span>29.11.2022г</span> <br />
                <img src={Stars} alt="rate" />
                <SwiperNavButtons />
              </div>
            </ReviewInfo>
            <ReviewImg>
                <img src={RevImg} alt="" />
              </ReviewImg>
          </ReviewBox></SwiperSlide>
        </Swiper>

      </Container>
    </ReviewsSection>
  );
};

