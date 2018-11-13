import styled, { createGlobalStyle } from 'styled-components';

export const CLOSE_TIMEOUT_MS = 300;

export const applyGlobalStyles = () => {
  // eslint-disable-next-line
  createGlobalStyle`
  .ReactModal__Content {
    transition: all ${CLOSE_TIMEOUT_MS}ms ease;
    transition-property: opacity, transform;
    opacity: 0;
    transform: scale(0.9) translateY(5px);
    h2 {
      margin-top: 14px;
    }
  }

  .ReactModal__Overlay {
    transition: all ${CLOSE_TIMEOUT_MS}ms ease;
    transition-property: opacity, transform;
    z-index: 10;
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    transition: all ${CLOSE_TIMEOUT_MS}ms ease;
    z-index: 10;
    opacity: 1;
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }

  .ReactModal__Content--after-open {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content--before-close {
    opacity: 0;
    transform: scale(0.9) translateY(0);
  }
`;
};

export const BaseModal = styled.div`
  background-color: #fff;
`;

export const ModalTitle = styled.h1`
  background-color: #fff;
  color: #52c41a;
  padding: 0.4rem;
  padding-left: 1rem;
  margin: 0;
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  background-image: linear-gradient(-225deg, #31b0ff 0%, #47a8e5 100%);
`;

export const ModalBody = styled.div`
  background-color: white;
  color: black;
  min-height: 150px;
`;
