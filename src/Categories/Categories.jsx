import React, { Component } from 'react';
import Category from './Category/Category';
export class Categories extends Component {
	render() {
		return (
			<div>
				<div className="bg-white br3 ba b--black-10 shadow-5 flex flex-wrap justify-around js-content">
					<Category className="">
						<i className="fas fa-guitar orange f1 pa3" />
					</Category>
					<Category>
						<i className="fas fa-guitar orange f1 pa3" />
					</Category>
					<Category>
						<i className="fas fa-guitar orange f1 pa3" />
					</Category>
					<Category>
						<i className="fas fa-guitar orange f1 pa3 " />
					</Category>
					<Category>
						<i className="fas fa-guitar orange f1 pa3" />
					</Category>
					<Category>
						<i className="fas fa-guitar orange f1 pa3" />
					</Category>
				</div>
			</div>
		);
	}
}

export default Categories;
