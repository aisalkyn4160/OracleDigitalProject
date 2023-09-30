import { DevImg, DevItem, DevItems, DevSection, DevTxt, ItemTtl } from "./developmentStyle";
import ItemIcon1 from "../../assets/icons/ItemIcon1.png";
import ItemIcon2 from "../../assets/icons/ItemIcon2.png";
import ItemIcon3 from "../../assets/icons/ItemIcon3.png";
import ItemIcon4 from "../../assets/icons/ItemIcon4.png";
import ItemIcon5 from "../../assets/icons/ItemIcon5.svg";
import ItemIcon6 from "../../assets/icons/ItemIcon6.svg";
import { Container, SectionLink, SectionTtl } from "../GeneralComponents/SectionTtlLinkStyles";

export const Development = () => {
  const DevItemData = [
    {
      id: Math.random(),
      icon: ItemIcon1,
      title: "Система управления сайтом",
      text: "Разработка удобной и заточенной под клиента системы управления сайтом",
    },
    {
      id: Math.random(),
      icon: ItemIcon2,
      title: "Адаптивный сайт",
      text: "Создание адаптивного сайта под все существующие платформы и браузеры",
    },
    {
      id: Math.random(),
      icon: ItemIcon3,
      title: "Анализ рынка и конкурентов",
      text: "Разработка концепции сайта, на основе анализа рынка, конкурентов и тенденций",
    },
    {
      id: Math.random(),
      icon: ItemIcon4,
      title: "SEO оптимизация",
      text: "Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс",
    },
    {
      id: Math.random(),
      icon: ItemIcon5,
      title: "Контент для сайта",
      text: "При необходимости написание вкусного, продающего контента для сайта",
    },
    {
      id: Math.random(),
      icon: ItemIcon6,
      title: "Ux/Ui дизайн",
      text: "Разработка концепции сайта, на основе анализа рынка, конкурентов и тенденций",
    },
  ];
  return (
    <DevSection id="dev">
      <Container>
        <SectionTtl>
          Что входит в работу по <br /> разработке сайта
        </SectionTtl>
        <SectionLink href="#">Quis pretium vitae suspendisse.</SectionLink>
        <DevItems>
          {DevItemData.map((data) => {
            return (
              <DevItem key={data.id}>
                <DevImg src={data.icon} alt="icon" />
                <ItemTtl>{data.title}</ItemTtl>
                <DevTxt>{data.text}</DevTxt>
              </DevItem>
            );
          })}
        </DevItems>
      </Container>
    </DevSection>
  );
};
