import React, { Component } from 'react';
import FollowerImage from './component/FollowerImage';
import ImageColumn6 from './component/ImageColumn6';
import ImageColumn7 from './component/ImageColumn7';
import ImageColumn8 from './component/ImageColumn8';
import ImageColumn9 from './component/ImageColumn9';
import ImageColumn10 from './component/ImageColumn10';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="follow_intro">
          <div className="follow_comment">
            <h2>팔로우하는 사람들</h2>
          </div>
          <div className="follow_user">
            <FollowerImage />
          </div>
        </div>

        <div className="image_area">
          <ImageColumn6 />
          <ImageColumn7 />
          <ImageColumn8 />
          <ImageColumn9 />
          <ImageColumn10 />
        </div>
      </div>
    );
  }
}

export default App;
