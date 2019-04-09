import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search/Search';
import 'tachyons';
import Categories from './Categories/Categories';
import Events from './Events/Events';
import Map from './Map/Map';
class App extends Component {
	render() {
		return (
			<div className=" mw6 w-450-px">
				{/* w-400-px is the additional class use it to set width 400 px */}
				<div className="pos-rel z-index-3 ml2 mt2">
					<Search />
					<Categories />
					<Events />
				</div>
				<Map />
			</div>
		);
	}
}

export default App;
