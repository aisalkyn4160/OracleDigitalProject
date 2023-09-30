import styled from "styled-components";

export const ReviewsSection = styled.section`
  padding: 80px 0 0;
  text-align: center;

  @media (max-width: 800px) {
    padding: 50px 0;
  }
`
export const ReviewBox = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 85px 100px 0px;
  max-width: 1299px;

  @media (max-width: 1366px) {
    max-width: 1213px;
  }
  @media (max-width: 1150px) {
    padding: 35px 30px 0px 15px;
    flex-direction: column;
    /* height: 88vh; */
  }
`

export const ReviewInfo = styled.div`
  width: 859px;
  padding: 38px 100px 38px 54px;
  border: 2px solid rgba(0,0,0,0.2);
  text-align: left;
  position: relative;
  top: -50px;
  left: 100px;
  z-index: 8;

  @media (max-width: 1150px) {
    width: 100%;
    left: 0px;
    top: 50px;
  }

  @media (max-width: 800px) {
    padding: 23px 23px 30px 15px;
    top: 30px;

    && p{
      font-size: 14px;
    }
  }

  && p{
    font-size: 16px;
    line-height: 185%;
    color: rgba(0,0,0,0.8);
    padding: 32px 0 68px;
  }

  .rate {
    position: relative;
  }

  && b{
    padding-right: 25px;
  }

  && span{
    color: #000000;
  }

  && img{
    display: block;
  }

  @media (max-width: 450px) {
    top: 20px;
  }
`
export const PrevNextBtns = styled.div`
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  left: 74%;
  z-index: 10;

  && button{
   outline: none;
   border: none;
   background: transparent;
   cursor: pointer;
   margin-left: 10px;
  }

  && button svg:hover path,
  && button svg:hover g {
    fill: #5699E8;
    opacity: 1;
  }

  @media (max-width: 1150px) {
    bottom: -220%;
    left: 5%;

  }
`

export const ReviewImg = styled.div`
  width: 510px;
  z-index: 10;
  
  && img{
    width: 100%;
  }
  
  @media (max-width: 1366px) {
    /* max-width: 65%; */
  }
  
  @media (max-width: 1150px) {
    width: 50%;
    margin-right: -10px;
  }
`