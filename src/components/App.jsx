import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { MainContainer } from './App.styled';
import SearchBar from './Searchbar/Searchbar';
import { getCards } from 'Servises/getCards';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    searchText: '',
    collection: null,
    loading: false,
    pageNumber: 1,
  };

  componentDidUpdate(_, prevState) {
    const { searchText, pageNumber } = this.state;
    if (
      prevState.searchText !== searchText ||
      prevState.pageNumber !== pageNumber
    ) {
      this.setState({ loading: true });
      getCards(searchText, pageNumber)
        .then(data => {
          if (prevState.pageNumber !== pageNumber) {
            this.setState(prevState => ({
              collection: [...prevState.collection, ...data.hits],
              loading: false,
            }));
          } else {
            this.setState({
              collection: [...data.hits],
              loading: false,
            });
          }

          if (data.hits.length === 0) {
            return Promise.reject(new Error('Sorry'));
          }
        })
        .catch(error => console.log(error.message));
    }
  }

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber + 1 };
    });
  };

  render() {
    return (
      <MainContainer>
        <SearchBar onSubmit={this.handleSearch} />
        {this.state.collection && (
          <ImageGallery props={this.state.collection} />
          )}
          <Loader isLoading={this.state.loading}/>
        {this.state.collection && <Button onClick={this.onLoadMore} />}
        <ToastContainer autoClose={3000} />
      </MainContainer>
    );
  }
}

export default App;
