import React, { useState } from "react";
import ButtonSale from "../buttonSale/ButtonSale";
import './SideBar.css';

export default function SideBar() {
    const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
    const [menuClass, setMenuClass] = useState("menuBar hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu= () => {
        if(!isMenuClicked) {
            setBurgerClass("burgerBar clicked");
            setMenuClass("menuBar visible");
        }
        else {
            setBurgerClass("burgerBar unclicked");
            setMenuClass("menuBar hidden");
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const navMenuActive = !isMenuClicked ? "navMenu" : "";

    return(
        <>
            <menu className="menu">
                <ul className="listLinks">
                    <li>
                        <a className="menu-item" href="https://ev.braip.com/pv/lip25g9e/afiy88997" target='_blanck'>
                        <ButtonSale sale="Comprar"/>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item" href="#about">Sobre</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#contact">Contato</a>
                    </li>
                </ul>
            </menu>
            <nav className={navMenuActive}>
                <div className="menuBurger" onClick={updateMenu}>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                </div>
                <div className={menuClass}>
                    <menu className="menuHamburger">
                        <ul className="LinksHamburger">
                            <li>
                                <a href="https://ev.braip.com/pv/lip25g9e/afiy88997" target='_blanck'>
                                <ButtonSale sale="Comprar"/>
                                </a>
                            </li>
                            <li>
                                <a href="#about">Sobre</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </menu>
                </div>               
            </nav>
        </>
    )
}