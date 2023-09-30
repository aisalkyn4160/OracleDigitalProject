import { Container, SectionLink, SectionTtl } from "../GeneralComponents/SectionTtlLinkStyles"
import { projectsData, categories, responsive } from "./projectData"
import { useState } from 'react';
import { ProjectsSection, CategoriesBox, Project, Tab,ProjectCarousel, ProjectInfo, ProjectName, YellowLetter, BlueLetter, RedLetter, OrangeLetter, OtherProjects, OtherProjectsBox} from "./ProjectsStyles";



export const Projects = () => {

  const [active, setActive] = useState(categories[0])
  const [showAllProjects, setShowAllProjects] = useState(false)

  const showAllProjectsHandle = () => {
    setShowAllProjects(true)
  }
  const filteredProjects = projectsData.filter(item => item.category === active)

  return (
    <Container>
      <ProjectsSection>
        <SectionTtl>Наши выполненные проекты</SectionTtl>
        <SectionLink>Quis pretium vitae suspendisse.</SectionLink>
        <CategoriesBox>
          {categories.map(type => (
            <Tab key={type}
              active={active === type}
              onClick={() => setActive(type)}>
              {type}
            </Tab>
          ))}
        </CategoriesBox>   
          <ProjectCarousel responsive={responsive}>
            {filteredProjects.slice(0,3).map((data) => {
              if (data.category == active) {
                return (
                  <>
                    <Project key={data.id}>
                      <img src={data.img} alt={data.category} />
                      <ProjectInfo>
                        <h4>
                          {data.category} <ProjectName>{data.projectName}</ProjectName>
                          <YellowLetter>{data.projectNameO}</YellowLetter><BlueLetter>{data.projectNameP}</BlueLetter><RedLetter>{data.projectNameO}</RedLetter><YellowLetter>{data.projectNameP}</YellowLetter>
                          <OrangeLetter>{data.projectName3}</OrangeLetter>{data.projectName3}
                        </h4>
                        <p>
                          {data.description}
                        </p>
                        <a href="#">Смотреть приложение</a>
                      </ProjectInfo>
                    </Project>
                  </>
                )
              }

            }
            )}
          </ProjectCarousel>
        <OtherProjects onClick={showAllProjectsHandle}>Смотреть другие работы 
        {showAllProjects && <OtherProjectsBox> {filteredProjects.splice(3).map((data) => {
              if (data.category == active) {
                return (
                  <>
                    <Project key={data.id}>
                      <img src={data.img} alt={data.category} />
                      <ProjectInfo>
                        <h4>
                          {data.category} <ProjectName>{data.projectName}</ProjectName>
                          <YellowLetter>{data.projectNameO}</YellowLetter><BlueLetter>{data.projectNameP}</BlueLetter><RedLetter>{data.projectNameO}</RedLetter><YellowLetter>{data.projectNameP}</YellowLetter>
                          <OrangeLetter>{data.projectName3}</OrangeLetter>{data.projectName3}
                        </h4>
                        <p>
                          {data.description}
                        </p>
                        <a href="#">Смотреть приложение</a>
                      </ProjectInfo>
                    </Project>
                  </>
                )
              }

            }
            )}</OtherProjectsBox>}
        </OtherProjects>
      </ProjectsSection>
    </Container>
  )
}

