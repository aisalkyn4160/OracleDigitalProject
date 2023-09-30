import styled from "styled-components";
import { SectionTtl } from './../GeneralComponents/SectionTtlLinkStyles';

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

export const OurPartnersSection = styled.section`
  display: flex;
  gap: 40px;

  && div {
    width: 50%;
  }
  && div img {
    width: 100%;
  }
  
  @media (max-width: 1105px) {
    && h2{
      font-size: 45px;
    }
    p{
      font-size: 18px;
      margin-top: 30px;
    }
    
  }
  
  @media (max-width: 1000px) {
    && h2{
      font-size: 40px;
      margin: 0;
    }
    p{
      font-size: 18px;
      margin-top: 30px;
    }
    
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    text-align: center;
    padding: 0 30px;

    && div{
      width: 90%;
    }

    && div:nth-child(1){
      order: 1;
      padding: 0 ;
    }
  }
`;
export const OurPartnersText = styled.p`
  font-size: 20px;
  line-height: 185%;
  opacity: 0.7;
  margin-top: 43px;

  @media (max-width:800px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

