import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import StorePin from './Storepin';
import Stores from '../../Data/nikeStoreLocations.json';
import CustomMarker from './CustomMarker';
import StoreInfo from './StoreInfo';
import './Marker.scss'
import { Link } from 'react-router-dom'



class FindStore extends Component {

  state = {
    longitude:null,
    latitude:null,
    stores: [],
    showStores: 20,
    viewport: {
      width: 1300,
      height: 550,
      latitude: 33.074240,
      longitude: -112.584766,
      zoom: 6
    },
    popupInfo: null,
  };


renderPopup = () => {
  console.log('hit')
  console.log('Info from poup ------------->', this.state.popupInfo)
    const {popupInfo} = this.state
    return popupInfo && (
        <Popup tipsize={15}
        closeButton={true}
        closeOnClick={false}
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        anchor="top"
        onClose={() => {this.setState({popupInfo: null })}}>
          <StoreInfo info={popupInfo} />
        </Popup>
    )
}



showPosition = (position) => {
  console.log(position.coords.longitude)
  console.log(position.coords.latitude)
  this.setState({
    lat: position.coords.latitude,
    long: position.coords.longitude
  })
}


filterStores = (type) => {
  let filteredStoreList = Stores.filter(e => {
      if(e.type !== null) {
           if(e.type.name === type) {
            console.log('alalalalalalalala', e.type.name)   
            return e.type.name

           }
      }
  }) 
  console.log('list of Nike Stores',filteredStoreList)
  this.setState({stores: filteredStoreList})
}



componentDidMount () {
    let minimizedStores = [];
    minimizedStores = Stores.filter((e) => {
      return e.name
    })
    console.log('--------------miniStores', minimizedStores)
    this.setState({stores: minimizedStores})
}

  render() {
console.log(this.state.stores)

let mappedStoreList = this.state.stores.map((e, index) =>  {
  if(index < 20) {
    console.log('Stores that i want', e.type.name)
    return <Marker key={index} perspective={true} longitude={e.longitude} latitude={e.latitude} >
    <StorePin size={20} onClick={() => this.setState({popupInfo: e})} />
  </Marker>
  }
})

console.log('-------------allstores', Stores)



    return (
    <div className="find-store-main"><div>
        {/* <h1 onClick={() => this.filterStores('Nike Stores')}>FUEGO</h1> */}
        <div className="map-box">
      <ReactMapGL
      mapStyle="mapbox://styles/danielgomez/cjnm073b50s8u2rn6ik6gn88f"
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}>
      {this.renderPopup()}
      {this.state.stores.length > 1 ? mappedStoreList : null}
        </ReactMapGL>
      </div>
</div>


       <div className="locator-box" >
         <h3 className="" ></h3>
              <div className="store-locator">

                <div className="find-store-map">
                
                <div className="find-store">BROWSE ALL STORES
                
                    <div className="text-box-all-stores">
                    
                        <h4 className="nike-background-text-color">BROSWE ALL STORES</h4>
                        <p className="nike-text-color">Browse our directory of everything Nike has to offer.</p>
                        <Link to="/allstores"><a className="link-color">Browse All Stores</a></Link>

                    </div>

                </div>
                
                </div>

                <div className="find-store-map"><img className="all-stores" /></div>
              
              </div>

              <div className="store-locator">

                  <div className="find-store-map">
                  
                      <img className="nike-img"/>
                      
                  </div>
                  
                  <div className="find-store-map">
                  
                      <div className="find-store">NIKE STORES

                        <div className="text-box">
                          
                          <h4 className="nike-background-text-color">NIKE STORES</h4>
                          <p className="nike-text-color">Extraordanary access to a world of products and services,</p>
                          <p className="nike-text-color">all dedicated to helping you get better.</p>
                          <a href="#top" className="link-color" onClick={() => this.filterStores('Nike Stores')} >Show Locations</a>

                        </div>

                      </div>

                  </div>

            </div>

            <div className="store-locator">

                <div className="find-store-map" >

                <div className="find-store">NIKE FACTORY STORES

                    <div className="text-box-nike-factory">
                    <h4 className="nike-background-text-color">NIKE FACTORY STORES</h4>
                    <p className="nike-text-color">Nike products, in stock and where you shop</p>
                    <a href="#top" className="link-color" onClick={() => this.filterStores('Nike Factory Stores')} >Show Locations</a>
                    </div>
 
                </div>
                  
                </div>
                  <div className="find-store-map" ><img className="nike-factory-img" /></div>
                  
            </div>

            <div className="store-locator">

                  <div className="find-store-map">
                  
                      <img className="converse-img"/>
                  
                  </div>

                <div  className="find-store-map" >

                  <div className="find-store">CONVERSE

                      <div className="text-box">

                        <h4 className="nike-background-text-color">CONVERSE</h4>
                        <p className="nike-text-color">Browse all Converse stores</p>
                        <a href="#top" className="link-color" onClick={() => this.filterStores('Converse')} >Show Locations</a>
                     
                     </div>

                  </div>
                  
              </div>
                  
            </div>

            <div className="store-locator">

                  <div className="find-store-map">

                    <div className="find-store">HURLEY
                  
                <div className="text-box-hurley">
                  
                  <h4 className="nike-background-text-color">HURLEY</h4>
                  <p className="nike-text-color">Browse all Hurley stores</p> 
                  <a href="#top" className="link-color" onClick={() => this.filterStores('Hurley')} >Show Locations</a>

                </div>

              </div>
                  
            </div>

                  <div className="find-store-map"><img className="hurley-img"/></div>

            </div> 

            <div className="store-locator">

              <div className="find-store-map">
                
                <img className="partner-store" />
                
              </div>

                <div className="find-store-map">

                <div className="find-store">PARTNER STORES

                  <div className="text-box-Nike-partner-stores">
                      <h4 className="nike-background-text-color">NIKE PARTNER STORE</h4>
                      <a href="#top" className="link-color" onClick={() => this.filterStores('Nike Partner Store')} >Show Locations</a>
                  </div>

                 </div>
              
               </div>

             </div>

          </div>

       </div>
    );
  }
}

export default FindStore
