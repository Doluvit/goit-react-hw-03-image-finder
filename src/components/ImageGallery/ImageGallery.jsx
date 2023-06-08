import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ props }) => (
  <ImageGalleryList>
    <ImageGalleryItem props={props} />
  </ImageGalleryList>
);
