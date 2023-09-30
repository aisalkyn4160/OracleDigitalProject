import styled from "styled-components";
import WhatsApp from '../../assets/icons/wa.png'
import Telegram from '../../assets/icons/tg.png'
import Github from '../../assets/icons/gh.png'
import Instagram from '../../assets/icons/ig.png'
import Behance from '../../assets/icons/be.png'
import { Link } from "react-router-dom";

export const FooterBlock = styled.footer`
background-color: #000;
padding:78px 0 0;
color: #FFF;
`

export const FooterInfo = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 22px;
margin-bottom: 125px;

&& b{
font-weight: 600;
font-size: 28px;
line-height: 40px;
}

&& p{
font-size: 15px;
line-height: 24px;
}

@media (max-width: 900px) {
    flex-wrap: wrap;

    .contacts, .address{
        width: 45%;
    }

    && b{
        font-size: 20px;
    }
}
`
export const FooterInfoTtl = styled.h6`
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #5699E8;
margin:53px auto 20px;

`

export const Social = styled.div`
display: flex;
margin-top: 40px;
justify-content: space-between;
gap: 40px;

&& p{
    font-size: 16px;
    line-height: 19px;
}

@media (max-width: 800px){
    flex-direction: column;
}
`

const SocialIcons = styled(Link)`
display: inline-block;
width: 21px;
height: 21px;
background-repeat: no-repeat;
margin: 20px 30px 0 0;
background-position: center;
`
export const WhatsAppIcon = styled(SocialIcons)`
background-image:url(${WhatsApp});
`
export const TgIcon = styled(SocialIcons)`
background-image:url(${Telegram});
`
export const GhIcon = styled(SocialIcons)`
background-image:url(${Github});
`
export const IgIcon = styled(SocialIcons)`
background-image:url(${Instagram});
`
export const BeIcon = styled(SocialIcons)`
background-image:url(${Behance});
`
export const MapInfo = styled.div`
width: 40%;

@media (max-width: 900px) {
    width: 100%;
}
`
export const Copyright= styled.div`
background: #0C101C;
padding: 18px 0;

&& p{
font-size: 14px;
line-height: 17px;
color: rgba(255,255,255,0.5);
}
`