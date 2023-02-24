import React from "react";
import './Header.css';
import Logo from '../../img/iconPlant.svg';
import IconWhatsapp from '../../img/whatsappIcons.png'
import ButtonSale from "../buttonSale/ButtonSale";


export default function Header() {
    return(
        <div className="header">
            <header>
          <div>
            <a href="logoMarca" className="logo">
              <img src={Logo} alt="Logo marca" className="logoImg" />
              </a>
          </div>
          <div className="listLinks">
            <nav>
              <ul>
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
            </nav>
          </div>
          <div className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5591981153137" className="whatsappIcon">
              <img src={IconWhatsapp} alt="icone do whatsapp" className="whatsappIcon" />
            </a>
          </div>
      </header>
        </div>
    )
}