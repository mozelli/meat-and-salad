import React from 'react'

import './styles.css';
import hamburguerMenuIcon from '../../assets/images/icons/hamburger_menu.svg';
import closeIcon from '../../assets/images/icons/close.svg';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleMenu: "closed",
            stateMenu: true
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        let { stateMenu } = this.state;

        if (stateMenu) {
            this.setState({
                styleMenu: "openMenu"
            });
        } else {
            this.setState({
                styleMenu: "closeMenu"
            });
        }

        this.setState({
            stateMenu: !stateMenu
        })
    }

    render() {
        return (
            <div id="top-menu">
                <header>
                    <h1>
                        <Link to="/">
                            Meat & Salad
                        </Link>
                    </h1>
                    <div className="nav-menu">
                        <button
                            className="button-menu"
                            onClick={this.showMenu}
                        >
                            <img src={hamburguerMenuIcon} alt="Menu" />
                        </button>
                        <nav className={this.state.styleMenu}>
                            <div onClick={this.showMenu} className="close-link">
                                <img src={closeIcon} alt="Fechar" />
                                <p>Fechar</p>
                            </div>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Página Incial
                                        </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Cardápio
                                        </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Montar meu pedido
                                        </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }


}