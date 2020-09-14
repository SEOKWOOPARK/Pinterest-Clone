import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './App.css';
import ImageColumn1 from './component/ImageColumn1';
import ImageColumn2 from './component/ImageColumn2';
import ImageColumn3 from './component/ImageColumn3';
import ImageColumn4 from './component/ImageColumn4';
import ImageColumn5 from './component/ImageColumn5';

class App extends Component {
  render() {
    return (
      <div>
        <div className="image_area">
          <ImageColumn1 />
          <ImageColumn2 />
          <ImageColumn3 />
          <ImageColumn4 />
          <ImageColumn5 />
        </div>
      </div>
    );
  }
}

export default App;
