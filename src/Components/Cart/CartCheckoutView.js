import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const CartCheckoutView = (props) => {
    console.log('props: ', props);
    console.log('props.taxRate: ', props.taxRate);
    return ( 
        <div>
            <div>
                <div><h2>IN YOUR CART</h2><Link to='/cart'>Edit</Link></div>
                <div>
                    <p>Subtotal <i className="fas fa-question-circle"></i> {'$' + parseFloat(props.total)}</p>
                    {/* <p>Estimated Shipping<i className="fas fa-question-circle"></i> {'$' + parseFloat(0)}</p> */}
                    <p>Estimated Tax<i className="fas fa-question-circle"></i> {props.taxRate ? '$' + parseFloat(props.total * props.taxRate) : '$0.00'}</p>
                </div>
            </div>
            {props.cart.map((item, index) => {
                console.log('item: ', item);
                return <div key={index}>
                <img src={item.spriteSheet} alt={item.title}></img>
                    <p>{item.title}</p>
                    <p>FIX SIZING</p>
                    <p>FIX COLOR?</p>
                    <p>THIS IS QUANTITY</p>
                    <p>{'$' + `${item.localPrice}`}</p>
                    {/* <p>{'$' + paseFloat(this.props.total)}</p> */}
                </div>
            })}
        </div>
     );
}

const mapStateToProps = state => {
    console.log('mapStateToProps: ', mapStateToProps);
    return {
        cart: state.cart,
        total: state.total,
        }
}

 
export default connect(mapStateToProps)(CartCheckoutView);