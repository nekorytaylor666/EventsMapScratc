import React from 'react';

const Event = (props) => {
  // FIX eventdate not working, said this is an object
  const eventDate = new Date(props.time);
	return (
		<div>
			<div className="bg-white br3 ba b--black-10 shadow-5 flex flex-column justify-around js-content">
				<h1>{props.title}</h1>
				<br />
				<p>{props.desc}</p>
				<br />
				<p>---- {props.address}</p>
			</div>
		</div>
	);
};

export default Event;
