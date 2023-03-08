import React from "react";
import './Main.css';
import ButtonSale from "../buttonSale/ButtonSale";

export default function Main() {
    return (
        <div>
            <section className="main">
                <div className="imgDefault">
                     <a 
                        href="https://ev.braip.com/pv/lip25g9e/afiy88997" 
                        target='_blanck' 
                        className="buttonSale">
                        <ButtonSale sale="Saiba Mais" haveBg="backgroundTrue"/>
                    </a>
                </div>
               
            </section>
        </div>
    ) 
}