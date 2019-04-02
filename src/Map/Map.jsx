import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
	componentDidMount() {
		var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
        mapboxgl.accessToken = 'pk.eyJ1IjoibmVrb3J5dGF5bG9yIiwiYSI6ImNqdHo4N3h3cjFxdWM0YWx6NmZjbnR5ZWYifQ.C1_t-cxjzBPUNaJ6fonDbg';
		this.map = new mapboxgl.Map({
			container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom:'1',
            doubleClickZoom:true,
            dragPan:true    
		});
	}

	componentWillUnmount() {
		this.map.remove();
	}

	render() {
		const style = {
			position: 'absolute',
			top: 0,
			bottom: 0,
            width: '100%',
            zIndex:'-1'
		};

		return <div style={style} ref={(el) => (this.mapContainer = el)} />;
	}
}
export default Map;
