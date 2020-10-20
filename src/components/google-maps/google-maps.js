import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    render() {
      return (
        <Map google={this.props.google} zoom={13} initialCenter={{
            lat: 48.736781,
            lng: 30.216405
          }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      );
    }
  }
//   48.736781, 30.216405
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDZTxiZU7WXstD5q3YBFLyjVkvkUaIGai8')
})(MapContainer)