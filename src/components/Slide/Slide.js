import React, {Component} from 'react';
import './Slide.css';

class Slide extends Component {
	render() {
		console.log(this.props);
		let classes = `slide ${this.props.type}`;
		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}
}

export default Slide;
