// import PropTypes from 'prop-types';

import {
  ImageCalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { modalIsOpen: false };

  openModal = () => {
   this.setState({modalIsOpen: true})
  }
  
  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    const { webformatURL, largeImageURL, id, tags } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <ImageCalleryItemBox key={id} onClick={this.openModal}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
        {modalIsOpen && (
          <ModalWindow
            openModal={this.openModal}
            closeModal={this.closeModal}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        )}
      </ImageCalleryItemBox>
    );
  }
}

// ImageGalleryItem.propTypes = {
//   collection: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       webformatURL: PropTypes.string,
//       largeImageURL: PropTypes.string,
//     })
//   ),
// }
