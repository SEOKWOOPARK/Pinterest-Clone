import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Detail from './component/Detail';
import Home from './Home.js';
import Following from './Following.js';
import Header from './component/Header';
import HeaderContent from './component/HeaderContent';

import icon from './image/icons-pinterest.svg';
import notification from './image/notification.svg';
import message from './image/message.svg';
import profile from './image/profile.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="header_all">
          <Header />
          <HeaderContent
            imgsrc1={icon}
            imgsrc2={notification}
            imgsrc3={message}
            imgsrc4={profile}
          />
        </div>

        <Route path="/" exact={true} component={Home} />
        <Route path="/following" component={Following} />
        <Route path="/image/:id" component={Detail} />
      </HashRouter>
    );
  }
}

export default App;
