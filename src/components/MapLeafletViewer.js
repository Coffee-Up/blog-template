import React from "react";
import L from "leaflet";
import "../styles/MapViewer.css";
import markerLogo from "../assets/images/chr-logo.svg";

export default class MapLeafletViewer extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: this.props.coordinate,
      zoom: 16,
      scrollWheelZoom: false,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });

    var myIcon = L.icon({
      iconUrl: markerLogo,
      iconSize: [50, 50],
      //   iconAnchor: [0, 0],
      popupAnchor: [-3, -76],
      //   shadowUrl: "./assets/images/chr-logo.png",
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });

    L.marker(this.props.coordinate, { icon: myIcon }).addTo(this.map);
  }

  render() {
    return <div id="map"></div>;
  }
}
