import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios';
import { connect } from 'react-redux';


class Orders extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    render() {
        const {orders} = this.props
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


const mapStateToProps = state => {
    return {
        orders: state.orders,
    }
}

export default connect(mapStateToProps)(Orders)