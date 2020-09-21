import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ItemList from '../../components/ItemList';
import ImageSaladOrderForm from '../../assets/images/image_salad_order_form.jpg';


export default class OrderForm extends React.Component {

    state = {
        itemsPlate: [],
    };

    items = [
        {
            name: "Carnes",
            types: [
                {
                    name: "Bovina",
                    list: ["Picanha", "Maminha"]

                },
                {
                    name: "Suína",
                    list: ["Copa Lombo", "Pernil"]

                },

            ]
        },
        {
            name: "Saladas",
            types: [
                {
                    name: "Folhas Verdes",
                    list: ["Alface", "Brócolis"]
                }
            ]
        }
    ]

    addItemPlate = (item) => {
        const { itemsPlate } = this.state;

        this.setState({
            itemsPlate: [...itemsPlate, item]
        });
    }

    render() {
        console.log(this.state.carnes);
        return (
            <div id="order-form-page">
                <Header />
                <section className="banner">
                    <img src={ImageSaladOrderForm} alt="Monte seu prato!" />
                    <p className="title">Monte seu pedido da maneira que você quiser!</p>
                </section>

                <section className="categories">
                    {
                        this.items.map(item => {
                            return <Modal key={item.name} category={item.name}><ItemList types={item.types} /></Modal>
                        })
                    }
                </section>
                <section className="choosed-items">
                    <h2>Itens escolhidos:</h2>

                </section>
            </div>
        );
    }

}
/*

*/