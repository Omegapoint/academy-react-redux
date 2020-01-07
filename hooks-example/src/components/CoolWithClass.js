import React, {Component} from 'react';
import {getInformationAboutNumber} from "../api";
import {xyToRgb} from "../hooks/useHexBasedOnCoords";

class CoolWithClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: '',
      mouseCoords: {
        x: 0,
        y: 0,
      },
      hex: '#ffffff'
    }
  }

  componentDidMount() {
    console.log('CoolWithClass mounted');
    getInformationAboutNumber(this.state.count).then(this.updateText);
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({
      mouseCoords: {
        x: clientX,
        y: clientY
      },
      hex: xyToRgb(clientX, clientY)
    })
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // here we might need to specify when the component should re-render.
    // with hooks, we can easily do this with the dependency array.
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count < this.state.count) {
      getInformationAboutNumber(this.state.count).then(this.updateText);
    }
  }

  updateText = (text) => {
    this.setState({
      text
    });
  };

  onButtonClicked = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
        <div style={{ 'backgroundColor': this.state.hex}}>
          <h1>I am a cool(?) class component</h1>
          <h3>{this.state.text}</h3>
          <h4>Mouse coords - X: {this.state.mouseCoords.x}, Y: {this.state.mouseCoords.y}</h4>
          <button onClick={this.onButtonClicked}>Increment counter</button>
          <p>Class button was
            clicked {this.state.count} {this.state.count === 1 ? 'time' : 'times'}</p>
        </div>
    )
  }

}

export default CoolWithClass;
