import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './components/video-list-item';
//import VideoDetails from './components/video-details';
import VideoList from './components/video-list';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCEkyJIC9R3lrePv9kyHVWJXOvZW_RfeNk';

class App extends Component{

  constructor(props){
    super(props);

    this.state = { videos:[] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
