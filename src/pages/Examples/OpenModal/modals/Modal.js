import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ global, exampleModals }) => ({
  global,
  exampleModals,
}))
class Madal1 extends Component {
  render() {
    return (
      <div>
        我是页面内对话框，
        {this.props.exampleModals.data}
        {this.props.modalParams.message}
      </div>
    );
  }
}

export default Madal1;
