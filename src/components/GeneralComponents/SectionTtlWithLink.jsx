import { LogoImg, SectionLink, SectionTtl } from "./SectionTtlLinkStyles"



export const SectionTtkWithLink = (props) =>{
  return(
    <>
      <Container>{props.children}</Container>
      <SectionTtl>{props.children}</SectionTtl>
      <SectionLink>{props.children}</SectionLink>
    </>
  )
}
