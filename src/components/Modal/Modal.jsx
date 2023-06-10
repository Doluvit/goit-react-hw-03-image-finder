import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }
  closeModalByEsc = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  closeModalByClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
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
