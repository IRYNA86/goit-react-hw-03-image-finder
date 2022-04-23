import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGalleryOne = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => {
        return (<ImageGalleryItem
          key={id}
          imageView={webformatURL}
          
          
          
        />);
      })}
    </>
  );
};
