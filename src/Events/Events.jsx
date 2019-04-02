import React, { Component } from 'react';
import Event from './Event/Event';

export class Events extends Component {
	state = {
		events: [
			{
				id: 1,
				title: 'Guitar evening',
				time: 1554026402,
				address: {
					name: 'baraeva 13',
					coordinates: {
						lat: 51.177601,
						lng: 71.432999
					}
				},
				desc:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				id: 2,
				title: 'Guitar evening',
				time: 1554026402,
				address: {
					name: 'baraeva 13',
					coordinates: {
						lat: 51.177601,
						lng: 71.432999
					}
				},
				desc:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				id: 3,
				title: 'Guitar evening',
				time: 1554026402,
				address: {
					name: 'baraeva 13',
					coordinates: {
						lat: 51.177601,
						lng: 71.432999
					}
				},
				desc:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				id: 4,
				title: 'lel evening',
				time: 1554026402,
				address: {
					name: 'baraeva 13',
					coordinates: {
						lat: 51.177601,
						lng: 71.432999
					}
				},
				desc:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}
		]
	};
	render() {
		let EventsList = null;
		EventsList = (
			<div>
				{this.state.events.map((event) => {
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
		return(
            <div>
				<article class="mw6 mw6-ns br3 hidden ba b--black-10 mv2 shadow-4">

					{EventsList}
				</article>
            </div>
        );
	}
}

export default Events;
