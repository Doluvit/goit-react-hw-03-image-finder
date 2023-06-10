import { toast } from 'react-toastify';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Please, enter your request!');
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <SearchbarHeader>
               <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ImSearch />
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default SearchBar;
