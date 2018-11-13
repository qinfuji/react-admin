import React, { Component } from 'react';

class Madal1 extends Component {
  render() {
    return (
      <div>
        我是全局对话框,
        {this.props.modalParams.message}
      </div>
    );
  }
}

export default Madal1;
