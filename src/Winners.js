import React, { Component } from 'react';

export default class Winners extends Component {
  constructor() {
    super();
    this.state = { name: 'Yuliya' };
  }

  componentWillUpdate(nextProps) {
    
  }
  // read localStore
  //
  render() {
    const { name } = this.state;
    console.log('render');
    return (
      <ul>
        <li>{name}</li>
        <li>Denis</li>
      </ul>
    );
  }
}
