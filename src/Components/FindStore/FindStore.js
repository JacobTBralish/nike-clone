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

  renderMarker = (store, index) => {
    return (
        <Marker key={`marker-${index}`}> 
        <StorePin size={20} onClick={() => this.setState({popupInfo: store})} />
        </ Marker>
    )
  }



//   renderMarker = (station, i) => {
//     const {name, coordinates} = station;
//     console.log('-----------------name', name)
//     return (
//       <Marker >
//         <div className="station"><span></span></div>
//       </Marker>
//     );
//   }

  render() {
    return (
    <div>
      <ReactMapGL      
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
    >
        <Marker onClick={this.renderMarker} latitude={STORES[0].latitude} longitude={STORES[0].longitude}  >
            <h1 className='station'>{STORES[0].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[1].latitude} longitude={STORES[1].longitude} > 
            <h1 className='station'>{STORES[1].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[2].latitude} longitude={STORES[2].longitude}  > 
            <h1 className='station'>{STORES[2].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[3].latitude} longitude={STORES[3].longitude}  > 
            <h1 className='station'>{STORES[3].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[4].latitude} longitude={STORES[4].longitude}  > 
            <h1 className='station'>{STORES[4].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[5].latitude} longitude={STORES[5].longitude}  > 
            <h1 className='station'>{STORES[5].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[6].latitude} longitude={STORES[6].longitude}  > 
            <h1 className='station'>{STORES[6].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[7].latitude} longitude={STORES[7].longitude}  > 
            <h1 className='station'>{STORES[7].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[8].latitude} longitude={STORES[8].longitude}  > 
            <h1 className='station'>{STORES[8].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[9].latitude} longitude={STORES[9].longitude}  > 
            <h1 className='station'>{STORES[9].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[10].latitude} longitude={STORES[10].longitude} > 
            <h1 className='station'>{STORES[10].address_lines}</h1>
        </Marker>
        <Marker onClick={this.renderMarker} latitude={STORES[11].latitude} longitude={STORES[11].longitude} > 
            <h1 className='station'>{STORES[11].address_lines}</h1>
        </Marker>
    </ReactMapGL>
    
      </div>
    );
  }
}

export default FindStore
