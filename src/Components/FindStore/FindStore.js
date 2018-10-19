import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import StorePin from './Storepin';
import STORES from '../../Data/nikeStoreLocations.json'
import './Marker.css'

class FindStore extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    popupInfo: null
  };

  marker = (city, index) => {
    return (
        <Marker key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}> 
        <StorePin size={20} onClick={() => this.setState({popupInfo: city})} />
        </ Marker>
    )
  }

  renderMarker(station, i) {
    const {name, coordinates} = station;
    return (
      <Marker key={i} longitude={coordinates[0]} latitude={coordinates[1]} >
        <div className="station"><span>{name}</span></div>
      </Marker>
    );
  }

  render() {
      console.log(STORES, 'the stores')
      const limitedData = STORES.filter(store => {
          console.log(store)
         return store.length > 6
        })
      const allStoresFromNike = STORES.map(e => {
        return (
            <div>
            <div>{e.latitude}</div>
            <div>{e.longitude}</div>
            </div>
        )
      })
    return (
    <div>
      <ReactMapGL
      viewState={limitedData}
     
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
     
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
    //   {STORES.map(this.marker)}
    />
      </div>
    );
  }
}

export default FindStore