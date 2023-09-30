import styled from "styled-components"
import PartnersImg2 from "../../assets/imgs/OurPartners2.png";
import {Container} from "../GeneralComponents/SectionTtlLinkStyles"
import { PartnersBannerSlider } from "./PartnersBannerSlider";


export const OurPartnersBanner = () => {
  return(
  <PartnersBanner>
    <OurPartnersContainer>
      <PartnersBannerImg src={PartnersImg2} alt="Partners" />
      <PartnersBannerSlider/>
    </OurPartnersContainer>
  </PartnersBanner>

  )
}
 const PartnersBanner= styled.div`
  background: #021832;
  padding-bottom:75px;

  @media (max-width: 800px) {
      padding-bottom: 20px;
    }
`
const OurPartnersContainer = styled(Container)`
  max-width: 1350px;
  margin: 0 auto;
`

const PartnersBannerImg = styled.img`
  width: 100%;

@media (max-width: 800px) {
  display: none;
}
`
