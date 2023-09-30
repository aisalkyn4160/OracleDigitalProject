import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import Tech1 from '../../assets/imgs/Tech1.png'
import Tech2 from '../../assets/imgs/Tech2.png'

export const TechnologiesSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <BannerSwiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={Tech1} alt="TechIcons" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Tech2} alt="TechIcons" />
            </SwiperSlide>
        </BannerSwiper>
    );
}

const BannerSwiper = styled(Swiper)`
 display: none;
 margin-top: 30px;
 
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
  padding-bottom: 55px;
}

.swiper-slide img {
  display: block;
  width: 98%;
  height: 100%;
  object-fit: cover;
}


.swiper-pagination-bullet {
  width: 40px;
  height: 8px;
  border-radius: 0;
  text-align: center;
  color: transparent;
  opacity: 1;
  background: #007aff;
  border-radius: 7px;
}

.swiper-pagination-bullet-active {
  background: #E9E9E9;

}

@media (max-width: 800px) {
    display: block;
    
    .swiper-slide img {
  display: block;
  width: 98%;
  height: 100%;
  object-fit: cover;
}
}
`