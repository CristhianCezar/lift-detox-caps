import React from "react";
import './About.css';
import SegredoDaFormula from "../../img/segredoDaFormula.png";
import ButtonSale from "../buttonSale/ButtonSale";

export default function About() {
    return(
        <section className="about">
            <h1 className="mainTitle">Tudo que você precisa saber sobre o <span>Lift Detox Caps</span></h1>
            <div className="formula">
                <h3>A formula por traz do Lift Detox</h3>
                <div className="secretFormula">
                    <img src={SegredoDaFormula} alt="..."/>
                    <a href="salling" className="buttonSale">
                        <ButtonSale/>
                    </a>
                </div>
            </div>
        </section>
    )
}