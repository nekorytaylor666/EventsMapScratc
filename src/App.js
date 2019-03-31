import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search/Search';
import 'tachyons';
import Categories from './Categories/Categories';
import Events from './Events/Events';

class App extends Component {
	render() {
		return (
			<div>
				{/* w-400-px is the additional class use it to set width 400 px */}
				<div className="pa3 flex flex-column w-400-px">
					<Search />
					<Categories />
					<Events />
				</div>
			</div>
		);
	}
}

export default App;
