import React from 'react';
import './Category.css'

const Category = (props) => {
	return (
		<div>
			<div className="pa2 pa2-ns flex  flex-column">
				<button id="categorie" className="br-100 ba bw1 b--orange bg-yellow grow pa2">
					{props.children}
				</button>
                <span class="caption mt2 categorie-text justify-content">Musician</span>
			</div>
		</div>
	);
};

export default Category;
