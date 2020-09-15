import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Header from '../../components/Header';
import saladImage from '../../assets/images/salad_image.png';
import OfferList from '../../components/OfferList';
import Social from '../../components/Social';
import Footer from '../../components/Footer';

export default class Landing extends React.Component {
    render() {
        return (
            <>
                <main id="landing-page">
                    <Header />
                    <section className="banner">
                        <h2>
                            Gostoso e saudável!
                        </h2>
                        <img src={saladImage} alt="Meat & Salad" />
                        <p>
                            Saladas não precisam ser sem graça. <br /> Aliás, <strong>não devem!</strong>
                        </p>
                    </section>
                    <section className="cta">
                        {/*<Link to="/order-form" className="comprar">
                            Monte agora seu pedido!
        </Link>*/}
                        <p>
                            Monte seu pedido da maneira que quiser. Escolha os itens e a quantidade de cada um.
                        </p>
                    </section>
                    <section className="offer">
                        <OfferList />
                    </section>
                    <section className="social">
                        <Social />
                    </section>
                    <Footer />
                </main>
            </>
        )
    }

}