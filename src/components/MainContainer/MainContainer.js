import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Elements from '../Elements/Elements';

export class MainContainer extends Component {
    render() {
        return (
            <section id="main-container">
                <h2 className="text-center">Blogs</h2>
                <div className="container">
                    <Route path='/blogs' exact><Blogs /></Route>
                    <Route path='/contact' exact><Contact /></Route>
                    <Route path='/elements' exact><Elements /></Route>
                </div>
            </section>
        )
    }
}

export default MainContainer
