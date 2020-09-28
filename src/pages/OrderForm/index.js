import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import ItemList from '../../components/ItemList';
import ImageSaladOrderForm from '../../assets/images/image_salad_order_form.jpg';

import addIcon from '../../assets/images/icons/add_icon.svg';
import removeIcon from '../../assets/images/icons/remove_icon.svg';


export default class OrderForm extends React.Component {

    state = {
        itemsPlate: [],
        iconList: addIcon
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

        let itemExist = itemsPlate.filter(i => {
            return i == item
        });

        if(itemExist) {
            
        }

        this.setState({
            itemsPlate: [...itemsPlate, item],
        });
    }

    render() {
        let {itemsPlate} = this.state;
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
                            return (
                                <Modal key={item.name} category={item.name}>
                                    <ItemList types={item.types} functionAddItem={this.addItemPlate} />
                                </Modal>
                            )
                        })
                    }
                </section>
                <section className="choosed-items">
                    <h2>Itens escolhidos:</h2>
                    <ul>
                        {
                            itemsPlate.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })

                        }
                    </ul>

                </section>
                <Footer />
            </div>
        );
    }

}
/*

*/