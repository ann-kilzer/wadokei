import React from 'react';

export default class Tokei extends React.Component {
    render() {
        return (
          <>
          <h1>時計</h1>
          <h1>{this.props.hour}:{this.props.minute}:{this.props.second}</h1>
          </>
        );
      }
}