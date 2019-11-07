import React, { Component } from 'react'
import Home from './Home/home'
import Service from './Service/service'
import Portfolio from './Portfolio/portfolio'
import Tscounter from './TsCounter/tscounter'
import Feature from './Feature/feature'
import Imageblock from './ImageBlock/imageblock'
import Team from './Team/team'
import Parallax from './Parallax/parallax'
import Pricing from './Pricing/pricing'
import Testimonial from './Testimonial/testimonial'
import Clients from './Clients/clients'

export class homepage extends Component {
    render() {
        return (
            <div>
                <Home />
                <Service />
                <Portfolio />
                <Tscounter />
                <Feature />
                <Imageblock />
                <Team />
                <Parallax />
                <Pricing />
                <Testimonial />
                <Clients />
            </div>
        )
    }
}

export default homepage
