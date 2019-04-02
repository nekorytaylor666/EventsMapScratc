import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search/Search';
import 'tachyons';
import Categories from './Categories/Categories';
import Events from './Events/Events';
import Map from './Map/Map'
class App extends Component {
	render() {
		return (
			<div>
				{/* w-400-px is the additional class use it to set width 400 px */}
				<div className="mw6 pa3 w-400-px">
					<Search />
					<Categories />
					<Events />
					<Map></Map>

				</div>
			</div>
		);
	}
}

export default App;
