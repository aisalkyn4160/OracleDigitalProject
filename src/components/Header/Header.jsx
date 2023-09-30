import { LogoComponent } from '../GeneralComponents/LogoComponent'
import { HeaderContainer, HeaderBlock, Logo, Nav, BurgerMenu } from './headerStyle'
import Burger from '../../assets/icons/burger.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)

    return (
        <HeaderBlock>
            <HeaderContainer>
                <Logo>
                    <LogoComponent />
                    <p>Разработка сайтов и <br />
                        мобильных приложений <br />
                        в Кыргыстане и по СНГ</p>
                </Logo>
                <BurgerMenu onClick={() => setBurgerMenu(!burgerMenu)}>
                    {burgerMenu ? <span>&#10006;</span> : <img src={Burger} alt="burger" />}
                </BurgerMenu>
                <Nav burger={burgerMenu}>
                    <li onClick={() => setBurgerMenu(!burgerMenu)}><NavLink activeClassName='active' to="/">Главная</NavLink></li>
                    <li onClick={() => setBurgerMenu(!burgerMenu)}><NavLink  to="/about">О компании</NavLink></li>
                    <li onClick={() => setBurgerMenu(!burgerMenu)}><NavLink  to="/prices">Услуги и цены</NavLink></li>
                    <li onClick={() => setBurgerMenu(!burgerMenu)}><NavLink  to="/products">Проекты</NavLink></li>
                    <li onClick={() => setBurgerMenu(!burgerMenu)}><NavLink  to="/contacts">Контакты</NavLink></li>
                </Nav>
            </HeaderContainer>
        </HeaderBlock>
    )
}

