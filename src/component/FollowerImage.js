import React from 'react';
import followingImage from './dummy/followingImage.json';
import Button1 from './Button1';
import '../App.css';

function FollowerImage() {
  const getImage = followingImage.map((item, id) => {
    return (
      <div>
        <ul key={id} className="follow_image_unit">
          <div>
            <img
              src={item.image}
              alt={item.alt}
              width="55px"
              height="auto"
              className="image_unit_image"
            />
          </div>
        </ul>
      </div>
    );
  });

  return <div className="follow_image_flex">{getImage}</div>;
}

export default FollowerImage;
