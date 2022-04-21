import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import apiGallery from 'services/api'
import {ImageGalleryOne} from 'components/ImageGallery/ImageGalleryOne'

class ImageGallery extends React.Component {
  state = {
    imageView: null,

    pageURL: '',
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      apiGallery(nextName)
        .then(imageView => this.setState({ imageView, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { imageView, error, status, gallery } = this.state;

    if (status === 'idle') {
      <></>;
    }
    if (status === 'pending') {
      return (
        <BallTriangle
          heigth="100"
          width="100"
          color="yellow"
          ariaLabel="loading-indicator"
        />
      );
    }
    if (status === 'rejected') {
      // Ошибку вынести в отдельный компонент 1:09
      <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        // Сюда нужно вставить одну карточку??
        
          <ImageGalleryItem/>
            
        // <li className="gallery-item">
        //   <img src={imageView.hits[0].webformatURL} alt="" />
        //   </li>
      );
    }
  }
}
export default ImageGallery;