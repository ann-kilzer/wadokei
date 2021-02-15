import React from 'react';
import Tick from './Tick'

export default class Tokei extends React.Component {

  renderHourTicksFn = () => {
    const hourTicks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourTicks.push(
        <Tick
          key={`hour_${i}`}
          angle={i * 30}
          symbol={i}
        />,
      );
    }
    return hourTicks;
  }

  render() {
    const minute = this.props.minute < 10 ? '0' + this.props.minute : this.props.minute;
    const second = this.props.second < 10 ? '0' + this.props.second : this.props.second;
    return (
      <>
      <h1>時計</h1>
        <h1>{this.props.hour}:{minute}:{second}</h1>
        {this.renderHourTicksFn()}
      </>
    );
  }
}