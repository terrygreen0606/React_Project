import React, { Component } from 'react'

export class clients extends Component {
    render() {
        return (
            <section id="clients" className="clients">
                <div className="container">
                    <div className="row wow fadeInLeft">
                        <div id="client-carousel" className="col-sm-12 owl-carousel owl-theme text-center client-carousel">
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client1.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client2.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client3.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client4.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client5.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client6.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client7.png" alt="client" />
                                </a>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <a href="#">
                                    <img src="./images/clients/client8.png" alt="client" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default clients
