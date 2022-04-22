export default function ImageGalleryItem({
    id,
    imageView,
    largeImageURL,
}) {
    return (
        <li className="gallery-item">
            <img src={imageView} alt=""
                width='240'
            height='200'/>
</li>
    )
}

// export const ImageGalleryItem = ({ smallImg, tags, openLargeImage, id }) => {
//   return (
//     <GalleryItem onClick={() => openLargeImage(id)}>
//       <GalleryItemImage src={smallImg} alt={tags} />
//     </GalleryItem>
//   );
// };