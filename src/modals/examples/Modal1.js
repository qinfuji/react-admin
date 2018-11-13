import React, { Component } from 'react';
import Modal from '@/components/Modal';

class Madal2 extends Component {
  openMadal() {
    console.log('----');
  }
  render() {
    return <button onClick={this.openMadal}>open dialog</button>;
  }
}

export default Madal2;
