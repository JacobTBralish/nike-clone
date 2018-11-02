import React, {Component} from 'react';
import Stores from '../../Data/nikeStoreLocations.json';


export default class AllNikeStores extends Component {
    constructor() {
        super() 
        this.state = {
            filteredStores: []
        }
    }

    componentDidMount() {
     const stores = Stores.filter(e => {
          return  e.country_code === 'US'
    })

    console.log(this.state.filteredStores)
    this.setState({filteredStores: stores })
    }

    states = chosenState => {
        const stores = this.state.filteredStores.map((e, index) => {
            if(e.state === chosenState) {
                console.log(e, 'state')
                return e
            }
      })
     return stores
    }


    render() {
        console.log(this.state.filteredStores)
        console.log(this.states())
       const allStores = this.state.filteredStores.map(e => {
           return (
           <div>
               <div><a>{e.type.name}</a></div>
               {/* <div >{e.country_code}</div> */}

                <div>
                    <span>{e.address_lines[0]}</span>
                    <span>{e.address_lines[1]}</span>
                        <br />
                    <span>{e.address_lines[2]}</span>
                 </div>
               </div>
           )
       })
        return (
        
            <div>
                   <div className="filtered-stores">{allStores}
                </div>
            </div>
        )
    }
}
