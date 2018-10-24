import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import StorePin from './Storepin';
import Stores from '../../Data/nikeStoreLocations.json';
import CustomMarker from './CustomMarker';
import StoreInfo from './StoreInfo';
import './Marker.css'



class FindStore extends Component {

  state = {
    longitude:null,
    latitude:null,
    viewport: {
      width: 800,
      height: 800,
      latitude: 33.074240,
      longitude: -112.584766,
      zoom: 6
    },
    popupInfo: null,
  };

  
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
    // this.setState({
    //   popupInfo: {
    //     name: Stores.name,
    //     address_lines: Stores.address_lines,
    //     phone_number: Stores.phone_number
    //   }
    // })
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

//  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
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


// renderMarker = (store, index) => {
//   console.log(store, 'store')
//     return (
//       <Marker className="station" key={index}
//         longitude={store.longitude}
//         latitude={store.latitude} />
//     )
// }

  render() {
    // const popup = Stores.map(e => {
    //   console.log('hit')
    //   return <Popup tipsize={15}
    //   offsetTop={10}
    //   offsetLeft={10}
    //   closeButton={true}
    //   closeOnClick={false}
    //   anchor={"top"}
    //   longitude={Stores.longitude}
    //   latitude={Stores.latitude}/>
    // })

  const storesLongitude = Stores.map(e => {

   return <Marker className="station" longitude={e.longitude} latitude={e.latitude} >
          <StorePin size={20} onClick={() => this.setState({popupInfo: e})} />
        </Marker>
  })
 const storesLatitude = Stores.map(e => {
   return e.latitude
 })
    return (
    <div>
      <ReactMapGL
      mapStyle="mapbox://styles/danielgomez/cjnm073b50s8u2rn6ik6gn88f"
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}>
      {this.renderPopup()}
      {storesLongitude}
       <div>Longitude: {this.getLocation}</div>
       <div>Latitude: {this.getLocation}</div>
        <button onClick={this.getLocation}>get location</button>
        </ReactMapGL>
      </div>
    );
  }
}

export default FindStore
