import styled from "styled-components";
import { Container } from "../GeneralComponents/SectionTtlLinkStyles";

export const HeaderBlock = styled.header`
  background-color: black;
  padding: 30px 0px;
`;

export const HeaderContainer = styled(Container)`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  width: 40%;
  display: flex;
  gap: 30px;

  && p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
  }

  @media (max-width: 1366px) {
    && p{
      font-size: 14px;
      line-height: 17px;
    }
  }

  @media (max-width: 900px) {
    width: 60%;
    flex-direction: column;
    gap: 10px;

    && p{
      font-size: 13px;
      line-height: 15px;
    }
  }
`;
export const Nav = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;

  && li a {
    font-size: 18px;
    text-decoration: none;
    color: #ffffff;
    padding: 5px 15px;
    border-radius: 74px;
    white-space: nowrap;

  }

  && li a:hover,
  && li a:active,
  && li a.active {
    background: #5699e8;
  }

  @media (max-width: 1185px){
    gap: 0px;

    && li a{
      font-size: 15px;
      white-space: nowrap;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: flex-start;
    gap: 45px;
    position: fixed;
    padding: 48px 0px;
    z-index: 10;
    left: ${({ burger }) => burger ? '0' : '-100%'};
    right: 0;
    top: 162px;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    z-index: 10;
    transition: left 1s;

    && li a{
      font-size: 15px;
      white-space: nowrap;
      color: black;
    }

    && li a:hover,
    && li a:active,
    && li a.active {
    background: none;
    color: #5699e8;
  }
  }
`;


export const BurgerMenu = styled.div`
  display: none;
  && span{
    color: white;
  }

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 27px;
    cursor: pointer;
    z-index: 10;
  }
`