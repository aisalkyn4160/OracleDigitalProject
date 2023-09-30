import { Development } from "../components/Development/Development.jsx";
import { OurPartners } from "../components/OurPartners/OurPartners.jsx";
import { OurPartnersBanner } from "../components/OurPartnersBanner/OurPartnersBanner.jsx";
import { Projects } from "../components/Projects/Projects.jsx";
import { PromoInfo } from "../components/PromoInfo/PromoInfo.jsx";
import { Questions } from "../components/Questions/Questions.jsx";
import { Reviews } from "../components/Reviews/Reviews.jsx";
import { Statistics } from "../components/Statistics/Statistics.jsx";
import { Technologies } from "../components/Technologies/Technologies.jsx";

export const Home = () => {
  return (
    <div>
      <PromoInfo />
      <Development/>
      <OurPartners/>
      <OurPartnersBanner/>
      <Technologies/>
      <Projects/>
      <Statistics/>
      <Reviews/>
      <Questions/>
    </div>
  );
};
