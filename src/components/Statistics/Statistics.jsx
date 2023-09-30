import { Container } from "../GeneralComponents/SectionTtlLinkStyles"
import { StatisticsSlider } from "./StatisticsSlider"
import { StatisticsBox, StatisticsBoxForMobile, StatisticsSection } from "./StatisticsStyle"


export const Statistics = () => {
  return (
    <StatisticsSection>
      <Container>
        <StatisticsBox>
          <p><b>528</b> <span>Satisfaction  <br /> Clients</span> </p>
          <p><b>858</b> <span>Projects  <br /> Completed</span></p>
          <p><b>145</b> <span>Partners <br /> worldwide</span></p>
          <p><b>+120</b> <span>Partners  <br /> worldwide</span></p>
        </StatisticsBox>
        <StatisticsSlider/>
      </Container>
    </StatisticsSection>
  )
}