import axios from 'axios';

const initialState = {
    user: [],
    cart: [], 
    item: ''
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const ADD_TO_CART = 'ADD_TO_CART';
const SET_CART = 'SET_CART';

export default function reducer (state = initialState, action){
    console.log('action.type: ', action.type);
    
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
            return {...state, user:action.payload}
        case ADD_TO_CART:
            return {...state, cart:action.payload}
        case SET_CART:
            return {...state, cart:action.payload}
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

export function addToCart(item){
    
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function setCart(cart){
    
    return {
        type: SET_CART,
        payload: cart
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