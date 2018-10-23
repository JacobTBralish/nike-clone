import axios from 'axios';

const initialState = {
    user: [],
    products: [],
    cart: [],
    item: '',
    total: 0,
    shippingInfo: [],
    billingInfo: [],
    reviews: [],
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const LOGGED_OUT = 'LOGGED_OUT';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const SET_CART = 'SET_CART';
const SET_TOTAL = 'SET_TOTAL';
const POST_SHIPPING = 'POST_SHIPPING';
const POST_BILLING = 'POST_BILLING';

const DELETE_REVIEWS = 'DELETE_REVIEWS';
const EDIT_REVIEWS = 'EDIT_REVIEWS';
const GET_REVIEWS = 'GET_REVIEWS';
const CREATE_REVIEW = 'CREATE_REVIEW';


export default function reducer (state = initialState, action){

    console.log('action.type: ', action.type);
    console.log('action.payload: ', action.payload);
    
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
            return {...state, user:action.payload}
        case DELETE_REVIEWS:
            return {...state, reviews:action.payload}
        case EDIT_REVIEWS:
            return {...state, reviews:action.payload}
        case CREATE_REVIEW:
            return {...state, reviews:action.payload}
        case `${GET_REVIEWS}_PENDING`:
            return {...state }
        case `${GET_REVIEWS}_FULFILLED`:
            return {...state, reviews:action.payload}
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

export function getReviews(itemName) {
    // console.log('getReviews id -------> ', itemName)
    decodeURI(itemName)
    return {
        type: GET_REVIEWS,
        payload: axios.get(`/api/reviews/${itemName}`)
        .then(response => {
            // console.log('get reviews response ---->', response)
            // console.log('get reviews response.data ---->', response.data)
            return response.data
        })
        .catch(err => console.log('getReviews error --=========-->', err))
    }
}
export function deleteReviews(reviews) {
    console.log('deleteReviews reducer, reviews === ', reviews)
    return {
        type: DELETE_REVIEWS,
        payload: reviews
    }
}
export function editReviews(reviews) {
    console.log('editReviews reducer, reviews === ', reviews)
    return {
        type: EDIT_REVIEWS,
        payload: {reviews}
    }
}
export function createReview(reviews) {
    console.log('createReviews reducer, reviews === ', reviews)
    return {
        type: EDIT_REVIEWS,
        payload: reviews
    }
}