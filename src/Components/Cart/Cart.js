import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../../Redux/reducer';
import './Cart.scss'


class Cart extends Component {
    constructor() {
        super();
        this.state = {
            orderComplete: false,
            order: [],
            qty: 0,
            total: 0,
            orderid: ''
        }
    }

    handleQuantity = (event) => {
        console.log('event.target.value: ', event.target.value);
        this.setState({
            qty: event.target.value
        })
    }

    render() {
        let checkoutLinkStlyle = {
            textDecoration: "none",
            color: "white",
            background: "tomato",
            fontWeight: "bold",
        }

        let disclaimerText = {
            fontSize: "10px"
        }

        let { cart, total, deleteFromCart } = this.props
        console.log('total: ', total);
        let { orderComplete } = this.state;
        // const { totalPrice } = this;
        console.log('cart: ', cart);

        
        // let mappedCart = cart.map((item, index) => {
        //     if (item !== undefined)
        //    { var { spriteSheet, title, localPrice, subtitle } = item[0];
        //     return <div key={index}>
        //         <img src={spriteSheet} alt={title}></img>
        //         <p>{title}</p>
        //         <p>{localPrice}</p>
        //         <p>{subtitle}</p>

        //         <button onClick={() => deleteFromCart(cart, title, total)}>Remove from Cart</button>
        //     </div>
        //     }
        // })
        
        let mappedCart = cart.map((item, index) => {
            // console.log('ITEMITEMITEMITEM', item)
            if (item !== undefined)

           { var { spriteSheet, title, localPrice, subtitle } = item[0];


            return <div className="ch4_cartItem" key={index}>
                        <div className="ch4_cartItemImg">
                            <img src={spriteSheet} alt="lulz, ami right?" title="" border="0"></img>
                            
                            <br />
                        </div>
                        <div className="ch4_cartItemContent">
                            <div className="ch4_cartItemPricing">
                                <p className="ch4_cartItemPrice">{localPrice}</p>
                            </div>
                            <div className="ch4_cartItemOptionsContainer">
                                <a href="">
                                    <p className="ch4_cartItemTitle">{title}<br/>
                                        <span className="ch4_cartItemDescription"></span>
                                    </p>
                                </a>
                                <p className="ch4_cartItemOptions">
                                    <span className="ch4_cartItemOption">
                                        <span className="ch4_cartItemLabel">Style#:</span> style</span>
                                        <span className="ch4_cartItemOption">
                                        <span  className="ch4_cartItemLabel">Size:</span>&nbsp; M 14 / W 15.5</span>
                                        <span className="ch4_cartItemOption">
                                        <span  className="ch4_cartItemLabel">Color:</span> Red</span>
                                        <span className="ch4_cartItemOption">
                                        <span  className="ch4_cartItemLabel">Qty:</span>&nbsp;1&nbsp;@  {localPrice}</span>
                                </p>
                            </div>
                            <div className="ch4_cartItemActions ch4_lgRes">
                                <input name="remove" type="button" value="Remove" className="ch4_btn ch4_bch4_editButton" onClick={() => deleteFromCart(cart, title, total)} ></input>
                                <input name="edit" type="button" value="Edit" className="ch4_btn ch4_bch4_editButton" data-quantity="1" ></input>
                            </div>
                        </div>
                    </div>
            }
        })
        return (
            <div>
                <div id="ch4_mainNav">
                    <div id="ch4_continueShopping" tabindex="10"><Link to="/mensshoes" data-linkname="continue shopping">Continue Shopping</Link></div>
    {/* <!-- contact number & live chat --> */}
                    <div id="ch4_helpContainerTopNav">
  	                    <div className="ch4_helpChatTop" tabindex="20"><a href="#" class="liveChat" onclick="window.open(&quot;http://help-us.nike.com/app/chat/chat_launch&quot;);" data-linkname="live chat">Live Chat</a></div>
                        <div className="ch4_helpContactTop" tabindex="15">1800 806 6453</div>
                        <div className="ch4_helpFeedbackTop" tabindex="12">
                            <a href="#" onclick="window.usabilla_live('setForm', 'US'); window.usabilla_live('click');" data-linkname="give feedback">Give Feedback</a>
                        </div>
                    </div>
                </div>

                <div id="ch4_main" className="ch4_containerShell" role="main">
{/* <!-- Left column and cart items --> */}
                    <div id="ch4_contentColumn" className="" >
                      <div id="ch4_contentContainer">
                        <div id="ch4_contentMessage">
                         <p><span className="title" >NIKEPLUS MEMBERS GET FAST, FREE SHIPPING. &nbsp;&nbsp;</span><a href="https://www.nike.com/help/a/shipping-delivery" target="_blank">See Details.</a> &nbsp;&nbsp;<a href="https://www.nike.com/us/en_us/s/register" target="_blank">Join NikePlus Now</a></p>
                        </div>
{/* <!-- Cart Items List -->
    <!-- /* Content Items */}
                        <div className="chrome">
                            <h2 class="heading toUppercase">Your Cart ({`${cart.length}`})</h2>
                            <div id="content" className="content no-padding clearfix">
                                <div className="ch4_contentItems">
                                    <ul className="bordered">
                                        <form id="lineitemform" action="https://secure-store.nike.com/us/checkout/html/cart.jsp?_DARGS=/us/checkout/common/includes/lineItem.jsp.lineitemform" method="post" novalidate="">
                                            <li>
                                                {mappedCart}
                                            </li>
                                        </form>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* <!-- SUMMARY COLUMN --> */}


<div id="ch4_summaryColumn" className="" >
        <div id="ch4_summaryContent">
            <div id="ch4_summaryTitle" className="ch4_summaryRowBegin ch4_uppercase">SUMMARY</div>
        
            {/* <!-- Apply Promo Form --> */}
        
            <form id="cartPromoForm" name="cartPromoForm"   action="https://secure-store.nike.com/us/checkout/html/cart.jsp?_DARGS=/us/checkout/common/includes/cartSummaryPromoFormCollapsible.jsp.cartPromoForm" method="post" novalidate="">
                <div id="ch4_summaryPromo" className="ch4_summaryRow ch4_uppercase">
                    <span id="ch4_promoLabel" className=" js-toggleActive closed" data-targetelement="#ch4_promoEnter" couponinputbound="true">Do you have a promo code?</span>
            </div>
            </form>
            {/* <!-- Sub Total and personalization display --> */}
        <div id="ch4_summarySubtotal" className="ch4_summaryRow ch4_uppercase">SUBTOTAL
        <span id="subTotalAmount" className="ch4_right">cart total</span>
        </div>
        {/* <!-- Shipping Method Selector--> */}

            <div id="ch4_summaryShipping" className="ch4_summaryRow">
                <div id="ch4_itemLabel" className="ch4_itemLabel">ESTIMATED SHIPPING &amp; HANDLING</div>
                <div className="ch4_itemLabelValue ch4_right"><span id="shippingAmount">$0.00</span></div>
                <div className="float-left">Standard:&nbsp;FREE&nbsp;Arrives 2-4 Days</div>
            </div>

{/* <!--  Display VAS options --> */}

{/* <!-- For US display tax if it exists other wise display $_._ and for EU display Nothing--> */}

            <div id="ch4_summaryTax" className="ch4_summaryRow ch4_summaryTaxCart ch4_uppercase">ESTIMATED TAXES
            <span className="ch4_right">$_._</span>
         </div> 
{/* <!-- SUMMARY APPLY PROMO --> */}
{/* <div id="ch4_summaryApplyPromo" className="ch4_summaryCheckoutCol ch4_summaryRow ch4_summaryCheckoutTax ch4_uppercase" >
</div>  */}
{/* <!-- SUMMARY APPLY GIFT CARD --> */}
{/* <div id="ch4_summaryApplyGC" className="ch4_summaryRow ch4_uppercase" >
</div> */}
{/* <!-- Summary Total --> */}
<div id="ch4_summaryTotal" className="ch4_summaryRow ch4_uppercase">TOTAL<span id="totalAmt" className="ch4_right">${total ? (total).toFixed(2) : (0).toFixed(2)}</span>         
</div>
<div id="ch4_summaryTotal" className="ch4_summaryRow ch4_uppercase">
    {/* <input id="ch4_cartCheckoutBtn" type="button" value="CHECKOUT" className="ch4_btn ch4_btnOrange ch4_btnDropShadowSummary ch4_btnSummaryCol"></input> */}
    <Link id="ch4_cartCheckoutBtn"  className="ch4_btn ch4_btnOrange ch4_btnDropShadowSummary ch4_btnSummaryCol" to='/checkout'>CHECKOUT</Link> 
</div>

{/* /* <h2>*Total: ${total ? (total).toFixed(2) : (0).toFixed(2)}</h2>
                <p style={disclaimerText}>*Tax will be included after shipping details are input</p>
                {console.log('total: ', total)}
                <Link style={checkoutLinkStlyle} to='/checkout'>CHECKOUT</Link>  */}
        </div>
    <div id="ch4_summaryButtons" className="ch4_summaryRowEnd "></div>
   {/* <!-- Free Ship Message --> */}
  {/* <!-- Free Ship Message --> */}
      <div id="ch4_summaryMessage">
        <span className="ch4_summaryMessageTitle">FREE SHIPPING</span>
        <span className="ch4_summaryMessageTextBody">
          YOUR ORDER QUALIFIES FOR FREE SHIPPING. Join Nike+ for free shipping on every order, every time.</span>
      </div>
    {/* <!-- HELP SECTION  --> */}

  <div id="ch4_summaryHelp">
    <div className="ch4_helpTitle ch4_uppercase">NEED HELP?</div>
        <ul className="ch4_helpList">
            <li>
                <a href="#" name="order_secure" data-linkname="need help:order_secure" class="ch4_helpTip">
                    How is my order secure?
                </a>
            </li>
            <li>
                <a href="#" name="payment_methods" data-linkname="need help:payment_methods" className="ch4_helpTip">
                What payment methods can I use?
                </a>
            </li>
            <li>
                <a href="#" name="returns" data-linkname="need help:returns" className="ch4_helpTip">
                    Using Coke Rewards?
                </a>
            </li>
            <li>
                <a href="#" name="get_my_items" data-linkname="need help:get_my_items" className="ch4_helpTip">When will I get my order?
                </a>
            </li>
        </ul>
            <a href="http://help-en-us.nike.com/app/home" className="ch4_moreHelp" target="_blank" data-linkname="need help:more help">More help</a>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
 /* <h2>*Total: ${total ? (total).toFixed(2) : (0).toFixed(2)}</h2>
                <p style={disclaimerText}>*Tax will be included after shipping details are input</p>
                {console.log('total: ', total)}
                <Link style={checkoutLinkStlyle} to='/checkout'>CHECKOUT</Link> */
const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total,
    }
}

const mapDispatchToProps =  {
    deleteFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)