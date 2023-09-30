import {
  Container,
  SectionLink,
  SectionTtl,
} from "../GeneralComponents/SectionTtlLinkStyles";
import TechnologiesImg from "../../assets/imgs/TechnologiesImg.png";
import styled from "styled-components";
import { TechnologiesSwiper } from "./TechnologiesSwiper";

export const Technologies = () => {
  return (
    <Container>
      <TechnologiesSection>
        <SectionTtl>Технологии, <br /> которые мы используем</SectionTtl>
        <SectionLink>Quis pretium vitae suspendisse.</SectionLink>
        <TechIcons src={TechnologiesImg} alt="Technologies" />
        <TechnologiesSwiper/>
      </TechnologiesSection>
    </Container>
  );
};

const TechnologiesSection = styled.section`
  padding: 50px 200px;
  text-align: center;

  @media (max-width: 1366px){
    padding: 50px ;
  }

  @media (max-width: 800px) {
      padding: 10px;
    }
`

const TechIcons = styled.img`
  width: 100%;
  margin-top: 35px;
  @media (max-width: 800px) {
    display: none;
  }
`