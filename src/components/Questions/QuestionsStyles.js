import styled from "styled-components";
import { Container, SectionLink } from "../GeneralComponents/SectionTtlLinkStyles";
import { SectionTtl } from './../GeneralComponents/SectionTtlLinkStyles';
import bgFAQ from '../../assets/imgs/bg_FAQ.png'

export const QuestionsSection = styled.section`
  padding-bottom: 117px;
  background-image: url(${bgFAQ});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const QuestinsContainer = styled(Container)`
  text-align: center;
`;
export const FaqBlock = styled.div`
  padding: 50px 0;
`;

export const QuestionSectionTtl = styled(SectionTtl)`
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
`
export const QuestionSectionLink = styled(SectionLink)`
  text-align: center;
`

export const QuestionForm = styled.form`
  max-width: 558px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;

  && label {
    margin: 40px 0 25px;
    font-size: 18px;
    line-height: 100%;
    color: #a6a5a5;
  }
  && input{
    margin-bottom:40px;
  }
  && input, 
  && textarea{
    border: none;
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px solid #cbcbcb;
    outline: none;
    background-color: transparent;
  }
  && input::placeholder,
  && textarea::placeholder {
    font-size: 20px;
    line-height: 100%;
    color: rgba(0,0,0,0.8);
  }

  && textarea{
    resize: none;
    margin-bottom: 40px;
    padding: 10px;
  }

  && button {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #5699E8;
    border-radius: 47px;
    border: none;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;
  }

  && p,
  && span{
    width: fit-content;
    padding: 0 5px;
    border: 1px solid rgb(229, 115, 115);
    border-radius: 4px;
    margin-top: -35px;
    margin-bottom: 20px;
    padding-left: 10px;
    font-weight: 500;
    color: rgb(244, 199, 199);
  }

  && span{
    color: lightgreen;
    margin-top: 10px;
    border: 1px solid lightgreen;
  }

  @media (max-width: 800px) {
    && input::placeholder,
    && textarea::placeholder {
      font-size: 12px;
    } 
  }
`;

export const SuccesText = styled.p`
  color: blue;
`
