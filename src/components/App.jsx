import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { MainContainer } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import { getCards } from 'Servises/getCards';
import { Button } from './Button/Button';

class App extends Component {
  state = {
    searchText: '',
    collection: null,
    loading: false,
    pageNumber: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      getCards(this.state.searchText, this.state.pageNumber)
        .then(cards => this.setState({ collection: cards.data.hits }))
        .catch(error => console.log(error.message));
    }
  }

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <MainContainer>
        <SearchBar onSubmit={this.handleSearch} />
        {this.state.collection && (
          <ImageGallery props={this.state.collection} />
        )}
        {this.state.collection && (
          <Button type="button" onClick={this.getCards} />
        )}
        <ToastContainer autoClose={3000} />
      </MainContainer>
    );
  }
}

export default App;
