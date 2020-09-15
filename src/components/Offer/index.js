import React from 'react'

import './styles.css';
import salad from '../../assets/images/salad01.jpg';
import salad2 from '../../assets/images/salad02.jpg';


export default class Offer extends React.Component {
    render() {
        return (
            <div id="offer">
                <header>
                    <h1>Ofertas do dia:</h1>
                </header>
                <article>
                    <h2>Salada de Folhas com Queijo e Nozes</h2>
                    <div className="description">
                        <img src={salad} alt="Nome da salada" />
                        <p>Folhas verdes, cebola, nozes picadas, queijo gorgonzola, pêras, azeite de oliva, azeite balsâmico, vinagre de maçã, mel, sal, pimenta do reino.</p>
                    </div>
                    <footer>
                        <button type="button">Comprar</button>
                        <p className="price">
                            <span className="de">De <span className="old-price">R$56,00</span> por </span><strong>R$50,00</strong>
                        </p>
                    </footer>
                </article>
                <article>
                    <h2>Salada de Repolho com Molho de Iogurte</h2>
                    <div className="description">
                        <img src={salad2} alt="Nome da salada" />
                        <p>Repolho verde, repolho roxo, cenoura ralada, cebolinha picada, mostarda amarela, iogurte grego, sal, pimenta do reino.</p>
                    </div>
                    <footer>
                        <button type="button">Comprar</button>
                        <p className="price">
                            <span className="de">De <span className="old-price">R$30,00</span> por </span><strong>R$24,90</strong>
                        </p>
                    </footer>
                </article>
            </div>
        )
    }

}