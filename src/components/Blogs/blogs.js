import React, { Component } from 'react'
import Maincontainer from './MainContainer/maincontainer'
import Bannerarea from '../BannerArea/bannerarea'

export class blogs extends Component {
    render() {
        return (
            <div>
                <Bannerarea />
                <Maincontainer />
                <div class="gap-40"></div>
            </div>
        )
    }
}

export default blogs
