import React from "react";
import './Main.css';
import ButtonSale from "../buttonSale/ButtonSale";

export default function Main() {
    return (
        <>
                <section className="main">
                    <a href="salling" className="buttonSale">
                        <ButtonSale/>
                    </a>
                </section>
        </>
    ) 
}