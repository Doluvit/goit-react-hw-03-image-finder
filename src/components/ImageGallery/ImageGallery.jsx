import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ props }) => {
  return (
    <ImageGalleryList>
      {props.map(({ webformatURL, largeImageURL, id, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.string,
};