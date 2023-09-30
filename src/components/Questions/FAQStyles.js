import styled from "styled-components";


export const FaqBox = styled.div`   
   max-width: 1100px;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
`  
export const FaqList = styled.ul`
   width: 45%; 

   && li:last-child{
      border: none;
   }

   @media (max-width: 800px) {
      width: 80%;
   }
`
export const FaqItems = styled.li`
   border-bottom: 1px solid #CBCBCB;
   padding: 30px 0;
`
export const Wrap = styled.div`
   display: flex;
   align-items: center;
   gap: 25px;
   text-align: left;

   && span {
      color: #5699E8;
      font-weight: bold;
      font-size: 30px;
   }

   && h5{
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
   }
`
export const DropDown = styled.div`
   && p{
      line-height: 150%;
      font-size: 16px;
      color: rgba(0,0,0,0.7);
      text-align: left;
   }
`