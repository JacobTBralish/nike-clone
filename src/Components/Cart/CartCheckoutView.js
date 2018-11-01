import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartCheckoutView.scss'

class CartCheckoutView extends Component {
    constructor () {
        super();
        this.state = {

        }
    }
    // console.log('props: ', props);
    // console.log('props.taxRate: ', props.taxRate);

    render() {
        console.log(this.props.cart, "CARTCARTCART")
        let mappedCart =   this.props.cart.length &&
            this.props.cart.map((item, index) => {
                console.log('item: ', item[0]);
                return <div className="mappedCartInner" key={index}>
                
                <div className="mappedCartImg"><img src={item[0].spriteSheet} alt={item[0].title}></img></div>
                <div className="mappedCartText">
                    <p className="mappedCartTitle">{item[0].title}</p>
                    <p>{item[0].subtitle}</p>
                    {/* <p>FIX COLOR?</p> */}
                    {/* <p>THIS IS QUANTITY</p> */}
                    <p>{'$' + `${item[0].rawPrice}`}</p>
                    </div>
                </div>
            })
    return ( 
        <div className="cartSummaryWrapper">
                <div className="summaryBox">
                    <div className="inYouCartFlex">
                        <h2>SUMMARY</h2>
                    </div>
                    <div className="summaryInner">
                        <div>
                        <p>Subtotal <i className="fas fa-question-circle"></i></p>
                        <span>{'$' + parseFloat(this.props.total).toFixed(2)}</span>
                        </div>
                        <div>
                        <p>Estimated Shipping <i className="fas fa-question-circle"></i> </p>
                        <span>$0.00</span>
                        </div>
                        <div>
                        <p>Estimated Tax <i className="fas fa-question-circle"></i> </p>
                        <span>{this.props.taxRate ? '$' + parseFloat(this.props.total * this.props.taxRate).toFixed(2) : '$0.00'}</span>
                        </div>
                        <div className="display">
                            <span className="displayTotal">TOTAL</span>
                            <span className="totalRed">{'$' + parseFloat(this.props.total).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="inYourCartWrapper">
                    <div className="inYouCartFlex">
                        <h2>IN YOUR CART</h2>
                        <Link id="editLink" to='/cart'>Edit</Link>
                    </div>
                    <div className="mappedCartParent">
                    <p className="dateHeader">GET IT BY TUESDAY, NOVEMBER 6TH</p>
                    {mappedCart}
                    </div>
      
                </div>
        </div>
     );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps: ', mapStateToProps);
    return {
        cart: state.cart,
        total: state.total,
        }
}

 
export default connect(mapStateToProps)(CartCheckoutView);