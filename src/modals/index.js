import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Modal from '@/components/Modal';

import GlobalModal from './examples/Modal';
import ModuleModal from '../pages/Examples/OpenModal/modals/Modal';

const modals = {
  globalModal: {
    Component: GlobalModal,
    width: 900,
  },

  moduleModal: {
    Component: ModuleModal,
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
    const { currentModal, currentModalData } = this.props.global;
    const modal = currentModal && modals[currentModal];
    return (
      <Modal
        isOpen={Boolean(modal)}
        width={modal && modal.width}
        title={modal && modal.title}
        onClose={isKeyDown => this.modalClose({ isKeyDown })}
      >
        {modal
          ? React.createElement(modal.Component, {
              closeModal: () => this.modalClose({ isKeyDown: false }),
              modalParams: currentModalData,
            })
          : null}
      </Modal>
    );
  }
}

export default Modals;
