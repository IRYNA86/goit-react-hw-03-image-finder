import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGalleryOne = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, description }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          
          description={description}
        />
      ))}
    </>
  );
};