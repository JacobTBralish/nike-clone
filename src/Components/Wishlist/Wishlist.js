import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Orders extends Component {
    // componentDidMount() {
    //      get wishlist from db
    // }

    render() {
        return (
            <div > {/* Component Parent Wrapper */}

                <div> {/* Page Header */}
                    <h1>WISH LIST</h1>
                </div>   

                <div> {/* Page body */}

                    <div>{/* IF NO ITEMS RENDER THIS */}
                        <div> {/* Header */}
                            <div>0 ITEMS</div>
                        </div>

                        <div> {/* Body */}
                            <div> {/* Inner Body Wrapper */}
                                <h3>YOUR WISH LIST IS CURRENTLY EMPTY.</h3>
                                <p>Save your favorite products and NIKEiD designs here to revisit later or to share. When you're ready to buy, add products from your Wish List directly to your cart.</p>
                            </div>
                        </div>
                    </div> 

                    <div>  {/* IF YES ITEMS RENDER THIS */}
                        <div> {/* Header */}
                            <div>x ITEMS</div>
                        </div>

                        <div> {/* Body */}
                            <div> {/* Inner Body Wrapper */}
                                {/* mappedWishlist here */}
                                {/* img, type, price, date added */}
                                {/* <img src="/nikestore/html/img/loading.gif"></img> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}