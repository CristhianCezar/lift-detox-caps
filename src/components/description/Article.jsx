import React from 'react';
import './Article.css';
import DiminuirApetite from '../../img/diminuirApetite.jpg';
import IntestinoRegulado from '../../img/intestinoRegulado.jpg';
import MulherFazendoAlongamentoNaRua from '../../img/mulherFazendoAlongamentoNaRua.jpeg';

export default function Article() {
    return (

            <div className="article">
                <div className="articleLeft">
                    <div className='left'>
                        <h3>Acelera o metabolismo</h3>
                        <p>
                            É comprovado pela ciência que ao fazer o seu metabolismo trabalhar mais rápido você naturalmente perde mais peso. Os componentes do emagrecedor contribuem muito para acelerar o metabolismo. O que significa que você basicamente vai gastar mais energia - fato que ajuda no processo de emagrecimento.
                        </p>
                    </div>
                <img src={MulherFazendoAlongamentoNaRua} alt="Mulher branca comendo frutas em uma tigela e sorrindo"/>
                </div>

                <div className="articleRight">
                    <img src={DiminuirApetite} alt="Mulher branca comendo frutas em uma tigela e sorrindo"/>
                    <div className='right'>
                        <h3>Diminui o Apetite</h3>
                        <p>
                            Sentir menos fome ao longo do dia pode ajudar muito na perda de peso. A boa notícia é que os ativos presentes no emagrecedor diminuem o apetite e reduzem a absorção de açúcares e gorduras no organismo, sem ter que passar fome.
                        </p>
                    </div>
                </div>

                <div className="articleLeft" id='contact'>
                    <div className='left'>
                        <h3>Regula o Intestino</h3>
                        <p>
                            Um intestino regulado e o emagrecimento têm ligação direta, pois esse órgão é um regulador essencial do nosso organismo. Por ser composto por diversas fibras inteligentes, seu intestino começará a trabalhar de forma correta. O que ajuda quem sofre com o famoso intestino preguiçoso.
                        </p>
                    </div>
                    <img src={IntestinoRegulado} alt="Mulher branca comendo frutas em uma tigela e sorrindo"/>
                </div>
            </div>
    )
}