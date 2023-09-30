import { LogoComponent } from "../GeneralComponents/LogoComponent"
import { FooterBlock, FooterInfo, FooterInfoTtl, Social, TgIcon, WhatsAppIcon, GhIcon, IgIcon, BeIcon, MapInfo, Copyright } from './FooterStyles';
import MapIMg from '../../assets/imgs/mapInfo.png'
import { Container } from "../GeneralComponents/SectionTtlLinkStyles";


export const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <LogoComponent />

                <FooterInfo>
                    <div className="contacts">
                        <div className="phoneNumbers">
                            <FooterInfoTtl>Телефон:</FooterInfoTtl>
                            <b>+996 709 683 738</b> <br />
                            <b>+996 557 978 715</b>
                        </div>
                        <Social>
                            <div className="messengers">
                                <p>Пишите нам <br />
                                    в мессенджерах</p>
                                <WhatsAppIcon to="https://web.whatsapp.com/">
                                </WhatsAppIcon>
                                <TgIcon to="https://web.tlgrm.app/">
                                </TgIcon>
                            </div>
                            <div className="socialPages">
                                <p>Мы в <br /> социальных сетях</p>
                                <GhIcon to="https://github.com/"></GhIcon>
                                <IgIcon to="https://www.instagram.com/"></IgIcon>
                                <BeIcon to="https://www.behance.net/"></BeIcon>
                            </div>
                        </Social>
                    </div>
                    <div className="address">
                        <FooterInfoTtl>Адрес:</FooterInfoTtl>
                        <p>Кыргызстан, г. Бишкек, ул. Тимирязева 80</p>

                        <FooterInfoTtl>E-mail:</FooterInfoTtl>
                        <p>contact@odigital.dev</p>

                        <FooterInfoTtl>График работы:</FooterInfoTtl>
                        <p>Ежедневно: 10:00 - 20:00</p>

                    </div>
                    <MapInfo>
                        <FooterInfoTtl>Мы на карте</FooterInfoTtl>
                        <iframe width="100%" height="260" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=260&amp;hl=en&amp;q=47%20Ay-Kocho%20Bishkek+(oracle%20digital)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </MapInfo>
                </FooterInfo>

            </Container>
            <Copyright>
                <Container>
                <p>Copyright2023 All Rights Recerved</p>
                </Container>
            </Copyright>
        </FooterBlock>
    )
}