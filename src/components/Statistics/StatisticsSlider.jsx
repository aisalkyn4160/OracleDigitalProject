import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from "styled-components";
import { StatisticsBox } from "./StatisticsStyle";

export const StatisticsSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <StatisticSwiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <StatisticsInfo>
                    <p><b>528</b> <span>Satisfaction  <br /> Clients</span> </p>
                    <p><b>858</b> <span>Projects  <br /> Completed</span></p>
                </StatisticsInfo>
            </SwiperSlide>
            <SwiperSlide>
                <StatisticsInfo>
                    <p><b>145</b> <span>Partners <br /> worldwide</span></p>
                    <p><b>+120</b> <span>Partners  <br /> worldwide</span></p>
                </StatisticsInfo>
            </SwiperSlide>
        </StatisticSwiper>
    );
}

const StatisticSwiper = styled(Swiper)`
  display: none;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
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
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  }
`

const StatisticsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 95%;

  && p {
    width: 45%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  && b {
    font-weight: 500;
    font-size: 35px;
    line-height: 49px;
  }

  && span {
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: left;
  }
`