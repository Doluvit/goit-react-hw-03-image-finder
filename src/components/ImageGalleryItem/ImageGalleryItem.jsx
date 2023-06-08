import PropTypes from 'prop-types';
import {
  ImageCalleryItemBox,
  ImageGalleryItemImage,} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ props }) => (
  <>
    {props.map(({ webformatURL, largeImageURL, id }) => {
      return (
        <ImageCalleryItemBox key={id}>
          <ImageGalleryItemImage src={webformatURL} alt={id} />
        </ImageCalleryItemBox>
      );
    })}
  </>
);

ImageGalleryItem.propTypes = {
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
