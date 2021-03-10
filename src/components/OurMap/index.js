import React from 'react';
import './OurMap.css';

const { Map, TileLayer, Pane, Path, Circle } = window.ReactLeaflet;

export class OurMap extends React.Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };

  render() {
    const pathOptions = { fillOpacity: 1, color: 'orange' };

    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Pane name="orange-circle" style={{ zIndex: 500 }}>
            {/* note that pathoptions are being ignored */}
            <Circle center={this.state.center} radius={1000} {...pathOptions} />
          </Pane>
        </Map>
      </div>
    );
  }
}

export default OurMap;
