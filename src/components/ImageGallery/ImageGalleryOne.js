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
// export const ImageGallery = ({ gallery, openLargeImage }) => {
//   return (
//     <Gallery>
//       {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             id={id}
//             smallImg={webformatURL}
//             largeImg={largeImageURL}
//             tags={tags}
//             openLargeImage={openLargeImage}
//           />
//         );
//       })}
//     </Gallery>
//   );
// };