import React from 'react';
import imageGroup7 from './dummy/imageGroup7';
import { Link } from 'react-router-dom';

function ImageColumn7() {
  const getImage7 = imageGroup7.map((item, id) => {
    return (
      <div className="imageCard">
        <Link
          className="link"
          to={{
            pathname: `/image/${item.content}`,
            state: {
              id: item.id,
              content: item.content,
              image: item.image,
              alt: item.alt,
            },
          }}
        >
          <ul key={id} className="image_unit">
            <div>
              <img
                src={item.image}
                alt={item.alt}
                width="230px"
                height="auto"
                className="image_unit_image"
              />
              <h5 className="image_content">{item.content}</h5>
            </div>
          </ul>
        </Link>
      </div>
    );
  });

  return (
    <div className="imageArea">
      <span>{getImage7}</span>
    </div>
  );
}

export default ImageColumn7;
