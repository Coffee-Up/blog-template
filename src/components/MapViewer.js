import React from "react";
import L from "leaflet";
import "../styles/MapViewer.css";
import markerLogo from "../assets/images/chr-logo.svg";

export default class MapLeafletViewer extends React.Component {
  componentDidMount() {
    const markers = this.props.mapsData;
    // TODO: Readability -> Change .latitude & .longitude in Prismic so we don't need to format
    const formatLocation = (coordonnees) => ({
      lat: coordonnees.latitude,
      lng: coordonnees.longitude,
    });

    this.map = L.map("map-viewer-leaflet", {
      center: formatLocation(markers[0].coordonnees),
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
    markers.forEach((marker) => {
      L.marker(formatLocation(marker.coordonnees), {
        icon: myIcon,
        title: marker.nom_lieu.raw[0].text,
      }).addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map-viewer-leaflet">
        <h1>Hello</h1>
      </div>
    );
  }
}
