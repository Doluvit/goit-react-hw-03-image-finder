import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

import {
  ImageCalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.string,
    tags: PropTypes.string.isRequired,
  };

  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen, }));
  };

  render() {
    const { webformatURL, largeImageURL, id, tags } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <>
      <ImageCalleryItemBox key={id} onClick={this.toggleModal}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageCalleryItemBox>
        {modalIsOpen && (
          <Modal
            toggleModal={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
        </>
    );
  }
}
