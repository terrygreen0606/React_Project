import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


export class header extends Component {

    render() {
        
        return (
            <header id="header" className="fixed-top header" role="banner">
                <a className="navbar-brand navbar-bg" href="index.html"><img className="img-fluid float-right" src="./images/logo.png" alt="logo" /></a>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <button className="navbar-toggler ml-auto border-0 rounded-0 text-white" type="button" data-toggle="collapse"
                            data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>

                        <div className="collapse navbar-collapse text-center" id="navigation">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to='/'><button className='nav-link'>Home</button></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false" href='/'>
                                        Pages
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="team.html">Our Team</a>
                                        <a className="dropdown-item" href="about2.html">About Us - 2</a>
                                        <a className="dropdown-item" href="service2.html">Services - 2</a>
                                        <a className="dropdown-item" href="service-single.html">Services Single</a>
                                        <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                                        <a className="dropdown-item" href="404.html">404 Page</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link">Elements</button>
                                </li>
                                <li className="nav-item">
                                    <Link to='/blogs'><button className="nav-link">Blogs</button></Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link">Contact</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link">About Us</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link">Log In</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default header
