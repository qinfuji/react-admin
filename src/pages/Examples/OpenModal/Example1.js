import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ global }) => ({
  global,
}))
class Example1 extends Component {
  openGlobalModal() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/openModal',
      payload: { modal: 'globalModal', data: { message: '我是全局对话框参数' } },
    });
  }

  openModuleModal() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/openModal',
      payload: { modal: 'moduleModal', data: { message: '我是模块内对话框参数' } },
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openGlobalModal.bind(this)}>打开全局对话框</button>
        <button onClick={this.openModuleModal.bind(this)}>打开模块内对话框</button>
      </React.Fragment>
    );
  }
}

export default Example1;
