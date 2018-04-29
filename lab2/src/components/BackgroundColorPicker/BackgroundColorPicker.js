import React, { Component } from 'react';
import "./BackgroundColorPicker.css";

class BackgroundColorPicker extends Component {
	
	colors = [
		{
			hex: 'lavender',
			name: 'lavender'
		},
		{
			hex: 'gold',
			name: 'gold'
		},
		{
			hex: '#f48c42',
			name: '🎃'
		},
		{
			hex: 'rebeccapurple',
			name: 'beautify purple'
		}
	];

	render() {
		return (
			<div className="BackgroundColorPicker">
				<h5>Välj bakgrundsfärg</h5>
				<select className="custom-select" onChange={this.props.onChange}>
					{this.colors.map((color, index) => {
						return (
							<option key={index} value={color.hex}>{color.name}</option>
						)
					})}
				</select>
			</div>
		);
	}
}

export default BackgroundColorPicker;
