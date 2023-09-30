import { Container } from "../GeneralComponents/SectionTtlLinkStyles";
import { Btn, PromoBLock, RoundBtn } from "./promoInfoStyle";
import { Link } from "react-scroll";


export const PromoInfo = () => {
  return (
    <PromoBLock>
      <Container>
        <h1>
          Dui sapien aliquet <span></span> aliquam <span></span> tellus velit
          bibendum.
        </h1>
        <p>
          Quis fringilla convallis et vitae volutpat at porttitor. Est tincidunt
          massa  aliquam sed enim rhoncus. Id nullam sollicitudin aliquet
          in morbi fermentum  sit aenean. Diam lectus vitae pretium dolor.
        </p>
        <Link to = 'contact' smooth = {true} duration = {1000}>
        <Btn>Связаться с нами</Btn>
        </Link>
        <Link to="dev" smooth = {true} duration = {1000}>
        <RoundBtn></RoundBtn>
        </Link>
      </Container>
    </PromoBLock>
  )
};

