import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default class MyMap extends Component {
  render() {
    const { coordinate } = this.props;
    console.log(coordinate);
    if (typeof window !== "undefined") {
      return (
        <MapContainer
          className="map-container"
          center={coordinate}
          zoom={14}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinate}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      );
    }
    console.log("nnnnoooo");
    return null;
  }
}
