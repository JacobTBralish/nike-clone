import axios from 'axios';

const initialState = {
    user: [],
    cart: [], 
    item: ''
}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const ADD_TO_CART = 'ADD_TO_CART';

export default function reducer (state = initialState, action){
    // console.log(action.payload)
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
        // console.log('reduxer', action.payload)
            return {...state, user:action.payload}
        case ADD_TO_CART:
        // console.log('reduxer', action.payload)
            return {...state, cart:action.payload}
        // case GET_CART:
        // console.log('reduxer', action.payload)
        //     return {...state, cart:action.payload}

        default:
            return state
    }
}

export function updateUser(){
    console.log('updateUser fired')
    return {
        type: UPDATE_USER_INFO,
        payload: axios.get('/api/user-data').then(response => {
            console.log('inside comp', response.data)
            return response.data
            }).catch(error => {
          console.log('error', error)
        })
    }
}

export function addToCart(item){
    console.log('addToCart fired -- item', item)
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

// export function getCart(){
//     console.log('addToCart fired -- item', item)
//     return {
//         type: ADD_TO_CART,
//         payload: 
//     }
// }

// export function addToCart(item){
//     console.log('addToCart fired -- item', item)
//     return {
//         type: ADD_TO_CART,
//         payload: axios.post('/api/cart-data', {item}).then(response => {
//             console.log('cart response.data', response.data)
//             return response.data
//             }).catch(error => {
//           console.log('error', error)
//         })
//     }
// }