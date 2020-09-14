import React from 'react';
import imageGroup3 from './dummy/imageGroup3';
import { Link } from 'react-router-dom';

function ImageColumn3() {
  const getImage3 = imageGroup3.map((item, id) => {
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
      <span>{getImage3}</span>
    </div>
  );
}

export default ImageColumn3;
