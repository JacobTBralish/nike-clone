import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartCheckoutView.scss'
var moment = require('moment-business-days');

class CartCheckoutView extends Component {
    constructor () {
        super();
        this.state = {

        }
    }
    render() {
        const {total, shippingCost, taxRate} = this.props
        const today = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let standard = moment(today).businessAdd(4)._d
        standard = `${months[standard.getMonth()]} ${standard.getDate()}`;
        // console.log(this.props.cart, "CARTCARTCART")
        let mappedCart = this.props.cart.length &&
            this.props.cart.map((item, index) => {
                // console.log('item: ', item[0]);
                return <div className="mappedCartInner" key={index}>
                            <div className="mappedCartImg"><img src={item[0].spriteSheet} alt={item[0].title}></img></div>
                            <div className="mappedCartText">
                                <p className="mappedCartTitle">{item[0].title}</p>
                                <p>{item[0].subtitle}</p>   {/* <p>FIX COLOR?</p> */} {/* <p>THIS IS QUANTITY</p> */}
                                <p>{'$' + `${item[0].rawPrice}`}</p>
                            </div>
                        </div>
                    })
        // console.log(this.props.shippingCost)

        let newTotal = parseFloat(total)
        // console.log('newTotal',newTotal)
        let newShipping = parseFloat(shippingCost)
        // console.log('shippingCost', shippingCost)
        let newTax = parseFloat(total * taxRate)
        // console.log('newTax',newTax)
        let finalTotal = total + newTax 
        // console.log('finalTotal',finalTotal)
        // console.log('(finalTotal + newShipping)',(finalTotal + newShipping))

    return ( 
        <div className="cartSummaryWrapper">
                <div className="summaryBox">
                    <div className="inYouCartFlex">
                        <h2>SUMMARY</h2>
                    </div>
                    <div className="summaryInner">
                        <div>
                        <p>Subtotal <i className="fas fa-question-circle"></i></p>
                        <span>{'$' + parseFloat(total).toFixed(2)}</span>
                        </div>
                        <div>
                        <p>Estimated Shipping <i className="fas fa-question-circle"></i> </p>
                        <span>{shippingCost ? `$${shippingCost}.00` : '$0.00'}</span>
                        </div>
                        <div>
                        <p>Estimated Tax <i className="fas fa-question-circle"></i> </p>
                        <span>{newTax ? '$' + newTax.toFixed(2) : '$0.00'}</span>
                        </div>
                        <div className="display">
                            <span className="displayTotal">TOTAL</span>
                            <span className="totalRed">{ shippingCost ?
                                '$' + (finalTotal + newShipping).toFixed(2)
                                : parseFloat(finalTotal).toFixed(2)
                                }</span>
                        </div>
                    </div>
                </div>

                <div className="inYourCartWrapper">
                    <div className="inYouCartFlex">
                        <h2>IN YOUR CART</h2>
                        <Link id="editLink" to='/cart'>Edit</Link>
                    </div>
                    <div className="mappedCartParent">
                    <p className="dateHeader">GET IT BY TUESDAY, {standard.toUpperCase()}</p>
                    {mappedCart}
                    </div>
      
                </div>
        </div>
     );
    }
}

const mapStateToProps = state => {
    // console.log('mapStateToProps: ', mapStateToProps);
    return {
        cart: state.cart,
        total: state.total,
        taxRate: state.taxRate
    }
}

 
export default connect(mapStateToProps)(CartCheckoutView);