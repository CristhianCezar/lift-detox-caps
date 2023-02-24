import React from "react";
import './ButtonSale.css';

export default function ButtonSale(props) {

    const bgButtonSale = props.haveBg === "backgroundTrue" ? "withBg" : "";
    return (
        <div className="buttonSale">
                <p className={bgButtonSale}>{props.sale}</p>
        </div>
    ) 
}