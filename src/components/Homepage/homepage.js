import React, { Component } from 'react'
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

export class Homepage extends Component {
    render() {
        return (
            <div>
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

export default Homepage
