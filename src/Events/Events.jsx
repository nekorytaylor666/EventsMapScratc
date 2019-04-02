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
		}
		return (
			<div>
				<article class="br3 bg-white hidden ba b--black-10 mv2 shadow-4">
					<a
						class="f4 grow no-underline br-pill ph3 pv2 mb2 dib w-80 tc orange b bg-yellow center-for-button"
						href="#0"
						onClick={this.ToggleEventsHandler}
					>
						Click to see the events
					</a>
					{EventsListToShow}
				</article>
			</div>
		);
	}
}

export default Events;
