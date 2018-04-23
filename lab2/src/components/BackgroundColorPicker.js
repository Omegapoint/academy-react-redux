import React, { Component } from 'react';

class BackgroundColorPicker extends Component {
	colors = [
		{
			hex: '#ff0',
			name: 'yellow'
		},
		{
			hex: 'lavender',
			name: 'lavender'
		},
		{
			hex: '#5a2b06',
			name: '💩'
		},
		{
			hex: 'rebeccapurple',
			name: 'beautify purple'
		}
	];

	render() {
		return (
			<div>
				<h3>Välj bakgrundsfärg</h3>
				<select className="custom-select" onChange={this.props.onChange}>
					{this.colors.map((color, index) => (
						<option key={index} value={color.hex}>{color.name}</option>
					))}
				</select>
			</div>
		);
	}
}

export default BackgroundColorPicker;
