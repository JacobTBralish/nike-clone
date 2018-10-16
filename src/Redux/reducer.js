import axios from 'axios';

const initialState = {
    user: [],

}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export default function reducer (state = initialState, action){
    switch(action.type){
        case `${UPDATE_USER_INFO}_FULFILLED`:
        // console.log('reduxer', action.payload)
            return {...state, user:action.payload}
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