import React, { Component } from 'react';
import Modal from '@/components/Modal';
import { connect } from 'dva';

@connect(({ global /*, loading*/ }) => ({
  //submitting: loading.effects['form/submitRegularForm'],
}))
class Example1 extends Component {
  openMadal() {
    const { dispatch } = this.props;
    console.log('----', dispatch);
    dispatch({
      type: 'global/openModal',
      payload: 'modal1',
    });
  }
  render() {
    return <button onClick={this.openMadal.bind(this)}>open dialog</button>;
  }
}

export default Example1;
