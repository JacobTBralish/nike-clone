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

  handleShowMore = () => {
    this.setState({showStores: 
    this.state.showStores >= Stores.length ?
    this.state.showStores : this.state.showStores + 1
    })
  }


  
// storeAddress = STORES.map(e =>  {
//     return (
//         <div>
//             <Marker>
//             <img className="companyImage" src={console.log(e.company_image, 'image')}/>
//             <div>{e.name}</div>
//             <div>{e.address_lines}</div>
//             <div>{e.phone_number}</div>
//             </Marker>
//         </div>
//     )
// }) 

// locateUser() {
//   navigator.geolocation.getCurrentPosition(position => {
//     this.updateViewport({
//       longitude: position.coords.longitude,
//       latitude: position.coords.latitude
//     });
//   });
// }



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

//  getDistanceFromLatLonInKm = (lat1,lon1,lat2,lon2) => {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1); 
//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c; // Distance in km
//   return d;
// }



getLocation = () => {
  console.log('hit before', navigator)
  if (navigator.geolocation) {
    console.log('hit inside')
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }
}

mapSearch = () => {

}


// renderMarker = (store, index) => {
//   console.log(store, 'store')
//     return (
//       <Marker className="station" key={index}
//         longitude={store.longitude}
//         latitude={store.latitude} />
//     )
// }



  render() {

  const storesLongitude = Stores.slice(0, this.state.showStores).map(e => {

   return <Marker perspective={true} longitude={e.longitude} latitude={e.latitude} >
            <StorePin size={20} onClick={() => this.setState({popupInfo: e})} />
          </Marker>
  })
 const storesLatitude = Stores.map(e => {
   return e.latitude
 })
    return (
    <div className="find-store-main">
      <div>
          <div className="map-box"></div>
      </div>
      <ReactMapGL
      mapStyle="mapbox://styles/danielgomez/cjnm073b50s8u2rn6ik6gn88f"
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}>
      {this.renderPopup()}
      {storesLongitude}
      {/* <button onClick={this.handleShowMore}>Show More stores</button> */}
       {/* <div>Longitude: {this.getLocation}</div>
       <div>Latitude: {this.getLocation}</div>
        <button onClick={this.getLocation}>get location</button> */}
        </ReactMapGL>
       <div className="locator-box" >
         <h3 className="" >STORE LOCATOR</h3>
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
                          <a className="link-color">Show Locations</a>

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
                    <a className="link-color">Show Locations</a>
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
                        <a className="link-color">Show Locations</a>
                     
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
                  <a className="link-color" >Show Locations</a>

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
                      <a className="link-color">Show Locations</a>
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
