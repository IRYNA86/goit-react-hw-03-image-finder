export default function ImageGalleryItem({
    id,
    smallImage,
    largeImageURL,
}) {
    return (
        <li className="gallery-item">
            <img src={smallImage} alt=""
                width='240'
            height='100'/>
</li>
    )
}