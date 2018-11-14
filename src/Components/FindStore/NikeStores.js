// import React, {Component} from 'react'
// import Stores from '../../Data/nikeStoreLocations.json';

// export default class NikeStores extends Component {

//     filterStores = (type) => {
//     Stores.filter(e => {
//         if(e.type !== null) {
//              if(e.type.name === type) {
//                  return e
//              }
//         } 
//     }) 
// }

//     render() {
        
//             // console.log(filteredNikeStores)
//             // let mappedStores = filteredNikeStores.map(e => {
//             //     return (
//             //         <div>{e}</div>
//             //     )
//             // })
//         return (
//             <div>
//                 {filteredNikeStores.map(e => {
//                     return (
//                         <div>{e.type.name}</div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }