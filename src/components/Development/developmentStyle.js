import styled from "styled-components";

export const DevSection = styled.section`
  padding: 57px 0;
  text-align: center;

  @media (max-width: 450px) {
    padding: 25px 30px;
  }
`;

export const DevItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DevItem = styled.div`
  width: 400px;
  background: rgba(86, 153, 232, 0.1);
  text-align: left;
  padding: 63px 38px 63px 67px;
  margin: 30px 0px;

  @media (max-width:800px) {
    min-width: 330px;
    margin: 8px 0;
    padding: 62px 36px;
  }
`;

export const DevImg = styled.img`
  width: 53px;
  height: 48px;
  margin-bottom: 53px;
`;
export const ItemTtl = styled.h3`
  font-weight: 800;
  font-size: 20px;
  line-height: 180%;
  text-transform: uppercase;
  color: #000000;
`;

export const DevTxt = styled.p`
  font-size: 16px;
  line-height: 180%;
  opacity: 0.5;
  margin-top: 23px;
`;
