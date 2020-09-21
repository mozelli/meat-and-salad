import React, { useState } from 'react';

import './styles.css';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
//import ItemList from '../../components/ItemList';
import ImageSaladOrderForm from '../../assets/images/image_salad_order_form.jpg';


export default class OrderForm extends React.Component {
    render() {
        return (
            <>
                <div id="order-form-page">
                    <Header />
                    <section className="banner">
                        <img src={ImageSaladOrderForm} alt="Monte seu prato!" />
                        <p className="title">Monte seu pedido da maneira que você quiser!</p>

                    </section>
                    <section className="categories">
                        <Modal buttonLabel="Carnes" textHeader="Carnes">
                            Olá
                        </Modal>
                        <Modal buttonLabel="Vegetais" textHeader="Vegetais">
                            Olá
                        </Modal>
                    </section>
                    <section className="choosed-items">
                        <h2>Itens escolhidos:</h2>
                        <ul>

                        </ul>
                    </section>
                </div>
            </>
        )
    }

}
/*
const [ items ] = useState([
        {
            category: "Carnes",
            options: [
                {
                    legend: "Bovinas",
                    arrayItems: [
                        {
                            id: 1,
                            name: "Maminha"
                        },
                        {
                            id: 2,
                            name: "Miolo de Alcatra"
                        },
                        {
                            id: 3,
                            name: "Picanha"
                        }
                    ]
                },
                {
                    legend: "Suínas",
                    arrayItems: [
                        {
                            id: 4,
                            name: "Copa Lombo"
                        },
                        {
                            id: 5,
                            name: "Lombo"
                        },
                        {
                            id: 6,
                            name: "Pernil"
                        }
                    ]
                },
                {
                    legend: "Embutidos",
                    arrayItems: [
                        {
                            id: 7,
                            name: "Linguíça de Frango"
                        },
                        {
                            id: 8,
                            name: "Chickens"
                        },
                        {
                            id: 9,
                            name: "Peito de Peru"
                        }
                    ]
                }
            ]
        },
        {
            category: "Saladas",
            options: [
                {
                    legend: "Folhas verdes",
                    arrayItems: [
                        {
                            id: 10,
                            name: "Alface"
                        },
                        {
                            id: 11,
                            name: "Repolho"
                        },
                        {
                            id: 12,
                            name: "Rúcula"
                        },
                        {
                            id: 13,
                            name: "Agrião"
                        },
                        {
                            id: 14,
                            name: "Chicória"
                        }
                    ]
                },
                {
                    legend: "Legumes",
                    arrayItems: [
                        {
                            id: 15,
                            name: "Abobrinha"
                        },
                        {
                            id: 16,
                            name: "Cenoura"
                        },
                        {
                            id: 17,
                            name: "Cebola"
                        },
                        {
                            id: 18,
                            name: "Pimentão"
                        },
                        {
                            id: 19,
                            name: "Rabanete"
                        }
                    ]
                },
                {
                    legend: "Frutas",
                    arrayItems: [
                        {
                            id: 20,
                            name: "Manga"
                        },
                        {
                            id: 21,
                            name: "Maçã"
                        },
                        {
                            id: 22,
                            name: "Uva"
                        },
                        {
                            id: 23,
                            name: "Abacaxi"
                        },
                        {
                            id: 24,
                            name: "Laranja"
                        }
                    ]
                },
            ]
        }
    ]);
*/