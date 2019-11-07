import React, { Component } from 'react'

export class bannerarea extends Component {
    render() {
        return (
            <div id="banner-area">
                <img src="./images/banner/banner1.jpg" alt="" />
                <div className="parallax-overlay"></div>

                <div className="banner-title-content">
                    <div className="text-center">
                        <h2>Blogs</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item text-white" aria-current="page">Blogs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default bannerarea
