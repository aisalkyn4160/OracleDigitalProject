import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const ProjectsSection = styled.section`
  text-align: center;
  padding: 75px 0;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const ProjectCarousel = styled(Carousel)`
   && ul{
    display: flex;
    gap: 10px;

    @media (max-width: 1015px) {
      gap: 0;
    }
   }

   && .react-multiple-carousel__arrow {
    display: none;
    width: 39px;
    min-height: 8px;
    border-radius: 7px;
    background-color: #E9E9E9;

    @media (max-width: 1015px) {
      display: block;
    }
   }

   .react-multiple-carousel__arrow:hover {
    background: #5699E8;
   }

   && button::before{
    display: none;
   }

   && .react-multiple-carousel__arrow--left {
      left: 52%;
      bottom: 0;

   }

   && .react-multiple-carousel__arrow--right{
      right: 50%;
      bottom: 0;
   }
`

export const CategoriesBox = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 65px;
`

export const ProjectsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0px 0px 65px;
`;

export const Project = styled.div`
  max-width: 450px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border-top: none;
  margin-bottom: 20px;
  
  && img {
    width: 100%;
  }
 
 
`;
export const ProjectInfo = styled.div`
  padding: 28px 46px 28px 32px;
  text-align: left;

  && h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 14px;
  }

  && p {
    font-size: 16px;
    line-height: 185%;
    opacity: 0.7;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  && a {
    display: inline-block;
    text-decoration: none;
    padding: 5px 18px;
    font-size: 18px;
    line-height: 185%;
    color: #5699e8;
    border: 1px solid #5699e8;
    margin-top: 36px;
    border-radius: 68px;
    white-space: nowrap;
  }

  && a:hover {
    background-color: #5699e8;
    color: white;
  }
`;

export const ProjectName = styled.span`
  color: #e47f53;
`;
export const BlueLetter = styled.span`
  color: #3698d4;
`;
export const RedLetter = styled.span`
  color: #e32967;
`;
export const YellowLetter = styled.span`
  color: #f7e200;
`;
export const OrangeLetter = styled.span`
  color: #ee5922;
`;

export const Tab = styled.button`
  padding: 15px 20px;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  white-space: nowrap;
  
  ${({ active }) =>
    active &&
    `
    border: 1px solid #000000;
    border-radius: 68px;
    opacity: 1;
  `}
`

export const OtherProjects = styled.a`
font-size: 20px;
color: #000000;
text-decoration: underline;

&&:hover{
  color: #5699E8;
}
`
export const OtherProjectsBox = styled.div`
  display: flex;
  gap: 40px;
`
