import React from "react";
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';


class App extends React.Component {
    state = {
        imageName: '',
    }
    handleFormSubmit = imageName => {
        this.setState({imageName})
    }
    render() {
        return (
            <>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGalleryItem imageName={this.state.imageName}/>
                <ToastContainer autoClose={ 3000}/>
                </>
    )
}
}
export default App;