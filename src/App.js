import React from "react";
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import apiGallery from 'services/api';
// import mapper from 'services/mapper'


class App extends React.Component {
    state = {
        imageName: '',
        id: '',
        images: [],
        largeImageURL: '' 
    }
    handleFormSubmit = imageName => {
        this.setState({imageName})
    }
    render() {
        return (
            <>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery imageName={this.state.imageName}
                    images={ this.state.images}/>
                <ToastContainer autoClose={ 3000}/>
                </>
    )
}
}
export default App;