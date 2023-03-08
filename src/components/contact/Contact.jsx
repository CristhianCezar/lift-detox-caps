import React from "react";
import './Contact.css';

export default function Contact() {
    return(
        <div className="contact">
            <h2>Entre em Contato e tire suas Dúvidas sobre o <span>Lift Detox Caps</span></h2>
            <div className="form">
                <form action="https://formsubmit.co/liftdetoxcaps@myyahoo.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_cc" value="cristhianvcezar@gmail.com" />

                    <label htmlFor="name">Seu Nome</label>
                    <input type="text" name="name" />

                    <label htmlFor="contact">Celular</label>
                    <input type="phone" name="phone" />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" />

                    <label htmlFor="message">Mande suas Dúvidas</label>
                    <textarea name="message" id="message" cols="5" rows="8"></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}