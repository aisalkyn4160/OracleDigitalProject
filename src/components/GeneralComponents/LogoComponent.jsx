import LogoImage from '../../assets/icons/logo.png'
import styled from 'styled-components'


export const LogoComponent = () => {
    return (
        <LogoImg src={LogoImage} alt="Logo" />
    )
}


const LogoImg = styled.img`
    width: 170px;
    height: 57px;

    @media (max-width: 1366px) {
        width: 155px;
        height: 49px;
    }

    @media (max-width: 800px) {
        width: 129px;
        height: 43px;
    }
`