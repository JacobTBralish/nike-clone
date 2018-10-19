import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Orders extends Component {
    // componentDidMount() {
    //      get orders from db
    // }

    render() {
        return (
            <div > {/* Component Parent Wrapper */}
                <div> {/* Inner Wrapper */}                 
                    <div>
                        <h1>MY ORDERS</h1>

                            <div> {/* IF NO ORDERS RENDER THIS */}
                                <div>No Orders Listed</div>
                                <div>
                                    <Link to='/'><button>Shop nike.com</button></Link>
                                </div>
                            </div>
                            
                        <div> {/* IF YES ORDERS RENDER THIS  */}
                            {/* mapOfOrders */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}