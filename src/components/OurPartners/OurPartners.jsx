import {
  SectionLink,
  SectionTtl,
} from "../GeneralComponents/SectionTtlLinkStyles";
import {
  Container,
  OurPartnersSection,
  OurPartnersText,
} from "./OurPartnersStyles";
import PartnersImg1 from "../../assets/imgs/OurPartners1.png";

export const OurPartners = () => {
  return (
    <Container>
      <OurPartnersSection>
        <div>
          <img src={PartnersImg1} alt="PartnersImg" />
        </div>
        <div>
          <SectionTtl>С нами сотрудничают</SectionTtl>
          <SectionLink>Quis pretium suspendisse.</SectionLink>
          <OurPartnersText>
            Quis fringilla convallis et vitae volutpat at porttitor. Est
            tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
            aliquet in morbi fermentum sit aenean. Diam lectus vitae pretium
            dolor.
          </OurPartnersText>
        </div>
      </OurPartnersSection>
    </Container>
  );
};
