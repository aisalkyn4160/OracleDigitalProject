import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import Banner1 from '../../assets/imgs/PartnersBanner1.png'
import Banner2 from '../../assets/imgs/PartnersBanner2.png'

export const PartnersBannerSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <BannerSwiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Banner1} alt="PartnersBanner" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Banner2} alt="PartnersBanner" />

            </SwiperSlide>
        </BannerSwiper>
    );
}

const BannerSwiper = styled(Swiper)`
 display: none;
 .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 45px;
}
.swiper-pagination-bullet {
  width: 40px;
  height: 8px;
  border-radius: 0;
  text-align: center;
  color: transparent;
  background: #007aff;
  opacity: 1;
  border-radius: 7px;
}

.swiper-pagination-bullet-active {
  background: #E9E9E9;

}

@media (max-width: 800px) {
    display: block;

    .swiper-slide img {
  display: block;
  width: 99%;
  height: 100%;
  object-fit: cover;
}
}
`