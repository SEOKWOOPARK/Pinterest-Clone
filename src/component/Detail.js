import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail_page">
          <div>
            <img src={location.state.image} className="detail_image" width="500px" height="auto" />
          </div>
          <div className="detail_subtitle">
            <ul>
              <h2>Image name: {location.state.content}</h2>
              <br />
              <h2>Image origination: {location.state.alt}</h2>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
