import React from 'react'

import './styles.css';

export default class Modal extends React.Component {
    constructor(props) {
        //super(props);

        this.state = {
            modalVisibility: "none",
            stateModal: false
        }
    }
    render() {

        function toggleModal() {
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

        return (
            <>
                <div id="button">
                    <button onClick={toggleModal}>{buttonLabel}</button>
                </div>

                <div id="modal" style={{ display: modalVisibility }}>
                    <div className="content">
                        <header>
                            <h1>{textHeader}</h1>
                            <span
                                id="closeButton"
                                onClick={toggleModal}
                            >
                                &times;
                        </span>
                        </header>
                        <section className="body">
                            {children}
                        </section>
                        <footer>
                            <button
                                onClick={toggleModal} >Fechar</button>
                        </footer>
                    </div>
                </div>
            </>
        )
    }

}
