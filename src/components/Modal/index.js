import React from 'react'

import './styles.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisibility: "none",
            stateModal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        let {stateModal} = this.state;

        if (this.state.stateModal) {
            this.setState({
                modalVisibility: "none"
            });
            //setModalVisibility("none");
        } else {
            this.setState({
                modalVisibility: "block"
            });
            //setModalVisibility("block");
        }
        this.setState({
            stateModal: !stateModal
        })
        //setStateModal(!stateModal);
    }
    render() {

        return (
            <>
                <div id="button">
                    <button onClick={this.toggleModal}>{this.props.buttonLabel}</button>
                </div>

                <div id="modal" style={{ display: this.state.modalVisibility }}>
                    <div className="content">
                        <header>
                            <h1>{this.props.textHeader}</h1>
                            <span
                                id="closeButton"
                                onClick={this.toggleModal}
                            >
                                &times;
                        </span>
                        </header>
                        <section className="body">
                            {this.props.children}
                        </section>
                        <footer>
                            <button
                                onClick={this.toggleModal} >Fechar</button>
                        </footer>
                    </div>
                </div>
            </>
        )
    }

}
