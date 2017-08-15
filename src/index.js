import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';<
const API_KEY = 'AIzaSyBS6pi-zlMHZV-UOfhAph2t46BUihnbEik';

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}


ReactDOM.render(<App/>, document.querySelector('.container'))
