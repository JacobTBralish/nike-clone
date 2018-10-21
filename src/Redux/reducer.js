import axios from 'axios';

const initialState = {
    user: [],
    products: [],
    cart: [],
    item: '',
    total: 0,
    shippingInfo: [],
    billingInfo: [],
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const LOGGED_OUT = 'LOGGED_OUT';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const SET_CART = 'SET_CART';
const SET_TOTAL = 'SET_TOTAL';
const POST_SHIPPING = 'POST_SHIPPING';
const POST_BILLING = 'POST_BILLING';

export default function reducer (state = initialState, action){
    console.log('action.type: ', action.payload);
    
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
            return {...state, user:action.payload}
        case LOGGED_OUT:
            return {...state, user: null}
        case GET_PRODUCT:
            return {...state, product: action.payload}
        case ADD_TO_CART:
            let oldCart = [...state.cart, action.payload.product]
            return {...state, cart:oldCart, total: action.payload.total}
        case SET_CART:
            return {...state, cart:action.payload}
        case SET_TOTAL:
            return {...state, total:action.payload}
        case POST_SHIPPING:
            return {...state, shippingInfo:action.payload}
        case POST_BILLING:
            return {...state, billingInfo:action.payload}

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

export function getProduct(products){
    
    return {
        type: GET_PRODUCT,
        payload: products
    }
}

export function addToCart(product, total){
    let fixedPrice = parseInt(product.price.split('').splice(1, product.price.length - 1).join(''), 10);
    total += fixedPrice
    console.log('total: ', total);
    console.log('product: ', product.title);
    return {
        type: ADD_TO_CART,
        payload: {product, total}
    }
}

export function setCart(cart){
    
    return {
        type: SET_CART,
        payload: cart
    }
}

// export function setTotal(total){
//     return {
//         type: SET_TOTAL,
//         payload: total
//     }
// }

export function postShippingInformation( firstName, lastName, streetAddress, city, chosenState, zipCode, email, phone){
    console.log('firstName, lastName, streetAddress, city, chosenState, zipCode, email, phone: ', firstName, lastName, streetAddress, city, chosenState, zipCode, email, phone);
    let shippingInfo = axios.post('/api/shippingInfo', {firstName, lastName, streetAddress, city, chosenState, zipCode, email, phone}).then(response => {
        console.log('response: ', response);
        return response.data
    })
    return {
        type: POST_SHIPPING,
        payload: shippingInfo
    }
}

export function postBillingInformation( firstName, lastName, streetAddress, city, chosenState, zipCode){
    console.log('firstName, lastName, streetAddress, city, chosenState, zipCode, email, phone: ', firstName, lastName, streetAddress, city, chosenState, zipCode);
    let billingInfo = axios.post('/api/billingInfo', {firstName, lastName, streetAddress, city, chosenState, zipCode}).then(response => {
        console.log('response: ', response);
        return response.data
    })
    return {
        type: POST_SHIPPING,
        payload: billingInfo
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