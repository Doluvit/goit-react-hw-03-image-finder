import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  };

  targetElement = null;

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
    this.targetElement = document.querySelector('body');
     disableBodyScroll(this.targetElement);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
     clearAllBodyScrollLocks();
  }
  closeModalByEsc = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
       enableBodyScroll(this.targetElement);
    }
  };
  closeModalByClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
       enableBodyScroll(this.targetElement);
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <Overlay onClick={this.closeModalByClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}
