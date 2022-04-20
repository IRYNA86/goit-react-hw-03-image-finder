import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Searchbar extends React.Component {
  state = {
    imageName: '',
    
  };
  handlImageName = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  hanleSubmite = event => {
      event.preventDefault();
      if (this.state.imageName.trim() === '') {
          toast.warn('Введите название');
          return;
      }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.hanleSubmite}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
                    placeholder="Search images and photos"
                    value={this.state.imageName}
                    onChange={this.handlImageName}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
