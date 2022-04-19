import React from 'react';

class ImageGalleryItem extends React.Component {
    state = {
        imageView: null,
    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;
        const apiKey = '25360661-9d832ca480fd7eb90334f4453';

        if (prevName !== nextName) {
            fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=4`)
                .then(res => res.json())
            .then(imageView => this.setState({imageView}))
        }
    }
    
  render() {
    return (
      <li className="gallery-item">
        <p>{this.props.imageName}</p>
            {this.state.imageView && <img src={this.state.imageView.webformatURL} alt="" />}
      </li>
    );
  }
}
export default ImageGalleryItem;
