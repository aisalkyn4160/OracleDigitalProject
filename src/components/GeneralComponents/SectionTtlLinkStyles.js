import styled from "styled-components";

export const SectionTtl = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 74px;
  color: #000000;
  margin: 20px 0;

  @media (max-width: 1366px) {
    font-size: 50px;
    line-height: 62px;
    margin-bottom: 12px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 37px;
  }
`;

export const SectionLink = styled.a`
  font-weight: 600;
  font-size: 22px;
  line-height: 185%;
  color: #5699e8;
  text-decoration: none;

  @media (max-width: 1366px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
max-width: 1480px;
margin: 0 auto;
padding: 0 10px;

@media (max-width: 1366px) {
max-width: 1366px;
padding: 0 50px;
}

@media (max-width: 900px) {
max-width: 900px;
padding: 0 20px;
}

@media (max-width: 450px) {
max-width: 450px;
padding: 0 10px;
}
`
