import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';


class ImageGalleryItem extends React.Component {
  state = {
      
      imageView: null,
      id: '',
    webformatURL: '',
    largeImageURL: '',
      loading: false,
      error: null
    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;
        const apiKey = '25360661-9d832ca480fd7eb90334f4453';

      if (prevName !== nextName) {
        this.setState({ loading: true });
       
        fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=4`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(`Do not have a picture with name ${nextName}`),
              );
          })
          .then(imageView => this.setState({ imageView }))
          .catch(error => this.setState({error}))
          .finally(() => this.setState({ loading: false }));
        }
    }
    
  render() {
    const { imageView, loading, error } = this.state
    const {imageName} = this.props
    return (
      <li className="gallery-item">
       
        {error && <h1>{ error.message}</h1>}
        {loading && <BallTriangle
  heigth="100"
  width="100"
  color="yellow"
  ariaLabel="loading-indicator"
/>}
        <p>{imageName}</p>
        {imageView && <img src={imageView.hits[0].webformatURL} alt="" />}
      </li>
    );
  }
}
export default ImageGalleryItem;
