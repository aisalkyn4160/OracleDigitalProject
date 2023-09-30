import styled from "styled-components";

export const StatisticsSection = styled.section`
  background: #2b2273;
  padding: 55px 0;

  @media (max-width: 800px){
    padding:27px 0px 0;
  }
`;
export const StatisticsBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;

  && p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
  }

  && b {
    font-weight: 600;
    font-size: 64px;
    line-height: 78px;

    @media (max-width: 1366px) {
      font-size: 60px;
    }
    @media (max-width: 1100px) {
      font-size: 50px;
    }
    @media (max-width: 950px) {
      font-size: 40px;
    }
  }

  && span {
    font-size: 20px;
    text-transform: uppercase;

    @media (max-width: 1366px) {
      font-size: 18px;
    }

    @media (max-width: 1100px) {
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
      display: none;
  }
`

