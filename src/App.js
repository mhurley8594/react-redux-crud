import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
