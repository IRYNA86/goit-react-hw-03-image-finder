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

