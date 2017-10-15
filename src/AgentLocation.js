import React, {Component} from 'react';
// import GoogleMapReact from 'google-map-react';
//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
// class AgentLocation extends Component {
//
//   render() {
//     return (
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyBPRhlMSHm3DI-wlqR3fH-a_6yrxb-cUG0"
//         }}
//         defaultCenter={[59.95, 30.33]}
//         defaultZoom={11}
//       >
//         <div
//           lat={59.955413}
//           lng={30.337844}
//         >A</div>
//       </GoogleMapReact>
//     );
//   }
// }

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={1}
    defaultCenter={{ lat: 0, lng: 0 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
      <Marker position={{ lat: 32.4712391, lng: -25.9549794}} />
      <Marker position={{ lat: -25.9408498, lng:  32.4867995}} />

    </MarkerClusterer>
  </GoogleMap>
)

class AgentLocation extends Component{
  render() {
    return (
      <MyMapComponent />
    );
  }
}

export default AgentLocation;