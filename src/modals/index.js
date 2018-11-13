import React, { PureComponent } from 'react';
import Modal from '@components/Modal';

import Modal1 from './examples/Modal1';

const modals = {
  modal1: {
    Component: Modal1,
    width: 900,
  },
};

@connect(({ global, loading }) => ({
  global,
}))
class Modals extends PureComponent {
  constructor(props) {
    super(props);
    this.modalClose = this.modalClose.bind(this);
  }

  modalClose() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/closeModal',
    });
  }

  render() {
    const modal = global.currentModal && modals[global.currentModal];
    return (
      <Modal
        isOpen={Boolean(modal)}
        width={modal && modal.width}
        onClose={isKeyDown => this.modalClose({ isKeyDown })}
      >
        {modal
          ? React.createElement(modal.Component, {
              closeModal: () => this.modalClose({ isKeyDown: false }),
            })
          : null}
      </Modal>
    );
  }
}

export default Modals;
