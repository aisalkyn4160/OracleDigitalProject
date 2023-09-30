import styled from "styled-components";
import TtlImg from "../../assets/imgs/promo_img1.png";
import TtlImg2 from "../../assets/imgs/promo_img2.png";
import Vector from "../../assets/icons/Vector.png"

export const PromoBLock = styled.section`
  top: 0;
  right: 0;
  background-color: black;
  padding: 150px 0px 80px;

  && h1 {
    color: white;
    font-weight: 700;
    font-size: 80px;
    line-height: 99px;
    text-align: center;
  }

  && h1 span {
    display: inline-block;
    position: relative;
    width: 228px;
    height: 65px;
  }

  && h1 span::before {
    content: "";
    display: inline-block;
    width: 220px;
    height: 65px;
    background-image: url(${TtlImg});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  && h1 span:last-child::before {
    background-image: url(${TtlImg2});
  }
  && p {
    max-width: 691px;
    margin: 43px auto;
    color: white;
    text-align: center;
    font-size: 20px;
    line-height: 185%;
    opacity: 0.8;
  }

  @media (max-width: 1366px) {
    && h1{
      font-size: 80px;
      line-height: 87px;
    }

    && h1 span,
    && h1 span::before{
      width: 200px;
      height: 57px;
    }
  }

  @media (max-width: 800px) {
      padding-top: 77px;

      && h1{
      font-size: 45px;
      line-height: 57px;
    } 

      && h1 span,
      && h1 span::before{
      width: 97px;
      height: 28px;
    }

    && p{
      font-size: 14px;
    }
  }
  
  @media (max-width: 450px) {  
      && p{
        max-width: 336px;
        margin-top: 15px;
      }
  }
`;

export const Btn = styled.button`
  display: block;
  outline: none;
  padding: 15px 60px;
  border: 2px solid #ffffff;
  border-radius: 74px;
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
  margin: 55px auto;

  &&:hover {
    border-color: #5699e8;
    background: #5699e8;
  }

  @media (max-width: 450px) {
    padding: 12px 45px;
  }
`;

export const RoundBtn = styled.button`
  display: block;
  width: 55px;
  height: 55px;
  margin: 144px auto 0px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background-color: transparent;

  &&::before{
    content: '';
    display: inline-block;
    width: 15px;
    height: 9px;
    background-image: url(${Vector});
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
