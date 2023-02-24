import React from "react";
import './Footer.css';
import LiftDetoxGarantia from '../../img/liftDetoxGarantia.png';

export default function Footer() {
    return (
        <footer> 
            <div className="container">
                <div className="linksFooter">
                    <div className="links">
                        <h3>Dicas de Receitas e Orientações</h3>
                        <ul>
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1cU2wgvA0Y6eN3CjZbuwMcryh5V4IYKED/view?usp=sharing" 
                                    target="_blanck">                                    
                                    Receitas Detox para Melhorar seu Dia a Dia
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1cTt4gTpFcjhxWDg9YxQLvNili5BUcpyM/view?usp=sharing" 
                                    target="_blanck">                                    
                                    Ebook sobre Saúde e Emagrecimento
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1dGYaSBp7c2HUrtJfjMlYjUDUgA5VgACt/view?usp=sharing" 
                                    target="_blanck">                                    
                                    Orientação de uso Lift Detox
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://drive.google.com/file/d/1obAJvgSKVkx_caYhD2gw_b6LNdO05dEC/view?usp=sharing" 
                                    target="_blanck">                                    
                                    Lift Detox - A combinação perfeita
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="notifications">
                    <h2>EMAGRECIMENTO COMPROVADO!</h2>
                    <h3>OU SEU DINHEIRO DE VOLTA</h3>
                    <p>
                        É sério! Você fica satisfeito, ou compramos o Lift Detox Caps de volta de você! Se por qualquer motivo achar que o Lift Detox não ajudou, nós nos comprometemos em devolver a quantia paga pelo seu kit de potes de Lift Detox Caps. Temos certeza que Lift Detox vai cumprir com o prometido, por isso nossa garantia é de 30 DIAS.
                    </p>                
                </div>
                <img src={LiftDetoxGarantia} alt="" />
            </div>
        </footer>
    )
}