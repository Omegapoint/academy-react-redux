import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBackgroundColor} from '../../actions/backgroundActions';

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
      name: 'Beautiful purple'
    }
  ];

  handleOnChange = (e) => {
    this.props.setBackgroundColor(e.target.value);
  };

  render() {
    return (
        <div className="BackgroundColorPicker">
          <h5>Välj bakgrundsfärg</h5>
          <select className="custom-select" onChange={this.handleOnChange}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setBackgroundColor: (color) => {
      dispatch(setBackgroundColor(color));
    }
  };
};

export default connect(null, mapDispatchToProps)(BackgroundColorPicker);
