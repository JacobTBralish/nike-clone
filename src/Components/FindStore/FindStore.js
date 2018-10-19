import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import StorePin from './Storepin'

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
        <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
            </ Marker>
    )
  }

  render() {
    return (
      <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      //{ StorePin.map(this.marker) }
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
export default FindStore