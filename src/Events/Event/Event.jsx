import React from 'react';
import './Event.css';

const Event = (props) => {
	// FIX eventdate not working, said this is an object
	const eventDate = new Date(props.time);
	return (
		<div>
			<h1 class="f3 f2-ns bg-white br3 br--top orange mv0 pt4 ph3">{props.title}</h1>
			<div class="desc-text pa3 b--black-10 bb">
				<p class="f6 f5-ns lh-copy measure">{props.desc}</p>
				<p className="db">---- {props.address}</p>
				<a class="f4 fw8 grow no-underline br-pill tc w-100 pv3	mb2 dib orange bg-yellow " href="#0"> LET'S GO! </a>
			</div>
		</div>
	);
};

export default Event;
