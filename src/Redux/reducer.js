import axios from 'axios';

const initialState = {
    user: [],
    products: [],
    product: [],
    cart: [],
    item: '',
    total: 0,
    shippingInfo: [],
    billingInfo: [],
    refId: ''
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const LOGGED_OUT = 'LOGGED_OUT';
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const SET_CART = 'SET_CART';
const SET_TOTAL = 'SET_TOTAL';
const POST_SHIPPING = 'POST_SHIPPING';
const POST_BILLING = 'POST_BILLING';
const CREATE_REF_ID = 'CREATE_REF_ID';

export default function reducer (state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
            return {...state, user:action.payload}
        case LOGGED_OUT:
            return {...state, user: null}
        case GET_PRODUCTS:
            return {...state, products: action.payload}
        case GET_PRODUCT:
            return {...state, product: action.payload}
        case ADD_TO_CART:
            let updatedCart = [...state.cart, action.payload.product]
            return {...state, cart:updatedCart, total: action.payload.total}
        case DELETE_FROM_CART:
            let newCart = [...state.cart];
            let index = newCart.findIndex(e => e.title == action.payload.title)
            newCart.splice(index, 1)
            let newTotal = newCart.reduce((acum, current) => {
                let { localPrice } = current[0]
                let nullo = parseInt(localPrice.split('').splice(1, localPrice.length - 1).join(''), 10);
                return acum += parseFloat(JSON.stringify(nullo))
            }, 0)
            return {...state, cart:newCart, total: newTotal}
        case SET_CART:
            return {...state, cart:action.payload}
        case SET_TOTAL:
            return {...state, total:action.payload}
        case POST_SHIPPING:
            return {...state, shippingInfo: action.payload}
        case POST_BILLING:
            return {...state, billingInfo: action.payload}
        case CREATE_REF_ID:
            return {...state, refId: action.payload}

        //  case GET_CART:
            //  return {...state, cart:action.payload}

        default:
            return state
    }
}

export function updateUser(){
    
    return {
        type: UPDATE_USER_INFO,
        payload: axios.get('/api/user-data').then(response => {
            
            return response.data
            }).catch(error => {
          
            })
        }
    }
    
export function logOut(){
    return {
        type: LOGGED_OUT
    }
}

export function getProducts(products){
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export function selectedProduct(product){
    return {
        type: GET_PRODUCT,
        payload: product
    }
}

export function addToCart(product, total){
    console.log('product: ', product);
    let fixedPrice =product[0].rawPrice
    total += fixedPrice
    
    
    return {
        type: ADD_TO_CART,
        payload: {product, total}
    }
}

export function deleteFromCart(cart, title, total){
    return {
        type: DELETE_FROM_CART,
        payload: {cart, title, total}
    }
}

export function setCart(cart){
    
    return {
        type: SET_CART,
        payload: cart
    }
}

export function postShippingInformation(shippingInfo){
    console.log('shippingInfo: ', shippingInfo);
    return {
        type: POST_SHIPPING,
        payload: shippingInfo
    }
}

export function postBillingInformation( refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode ){
    

    console.log('firstName, lastName, userId, address1, address2, city, chosenState, zipCode: ', refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode);
    return {
        type: POST_SHIPPING,
        payload: axios.post('/api/billingInfo', {refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode }).then(response => {
            return response.data
        }).catch(error => {
            console.log(error);
        })
    }
}

export function createRefId(refId){
    console.log('refId: ', refId);
    console.trace('refId: ', refId);
    
    
    return {
        type: CREATE_REF_ID,
        payload: refId
    }
}

//  export function getCart(){
     
//      return {
//          type: ADD_TO_CART,
//          payload: 
//      }
//  }

//  export function addToCart(item){
     
//      return {
//          type: ADD_TO_CART,
//          payload: axios.post('/api/cart-data', {item}).then(response => {
             
//              return response.data
//              }).catch(error => {
           
//          })
//      }
//  }