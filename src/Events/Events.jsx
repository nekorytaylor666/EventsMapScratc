import React, { Component } from 'react';
import Event from './Event/Event';
import './Events.css';
import EventsList from './Events_initial_conf';

export class Events extends Component {
	state = {
		Events: EventsList,
		ShowEvents: false
	};

	ToggleEventsHandler = () => {
		const doesShow = this.state.ShowEvents;
		this.setState({ ShowEvents: !doesShow });
	};

	render() {

		let EventsListToShow = null;
		let ButtonMessage = "Click to see the events";
		let scrollStyles = null;
		let backgroundClassTachyon = "bg-yellow";
		if (this.state.ShowEvents) {
			EventsListToShow = (
				<div>
					{this.state.Events.map((event) => {
						return (
							<div>
								<Event
									key={event.id}
									title={event.title}
									address={event.address.name}
									time={event.time}
									desc={event.desc}
								/>
							</div>
						);
					})}
				</div>
			);
			ButtonMessage = "Click to collapse the events";
			backgroundClassTachyon="bg-light-yellow";
			scrollStyles =  {
				width: "440px",
				height: "490px",
				overflow: "scroll",
				/* overflow-y: hidden; */
				overflowX: "hidden",
			};
		}
		
		return (
			<div>
				<article  className="br3 bg-white hidden ba b--black-10 mv2 shadow-5">
					<a
						className={"f4 grow no-underline br-pill ph3 pv2 mb2 dib w-80 tc orange b center-for-button "+backgroundClassTachyon}
						href="#0"
						onClick={this.ToggleEventsHandler}
					>
						{ButtonMessage}
					</a>
					<div id ="events-bar" style={scrollStyles}> 
					{EventsListToShow}
					</div>
				</article>
			</div>
		);
	}
}

export default Events;
