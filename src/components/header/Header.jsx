import React from "react";
import './Header.css';
import Logo from '../../img/iconPlant.svg';
import IconWhatsapp from '../../img/whatsappIcons.png';
import SideBar from "../sideBar/SideBar";

export default function Header() { 
    return(
        <div className="header">
            <header>
                <div>
                  <a href="logoMarca" className="logo">
                    <img src={Logo} alt="Logo marca" className="logoImg" />
                    </a>
                </div>  

                <SideBar />

                <div className="whatsapp">
                  <a href="https://api.whatsapp.com/send?phone=5591981153137" className="whatsappIcon">
                    <img src={IconWhatsapp} alt="icone do whatsapp" className="whatsappIcon" />
                  </a>
                </div>
          </header>
        </div>
    )
}