import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Button from '../buttonGroup/button';

// function ImageSlider({ imageList }) {
function ImageSlider2(props) {
  // const { imageList } = props;
  const [imageList, setImageList] = useState([]);

  // https://jsonplaceholder.typicode.com/photos

  const [index, setIndex] = useState(0);

  const onNextImage = () => {
    if (index + 1 < imageList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const onPreviousImage = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(imageList.length - 1);
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setImageList(json));
  }, []);

  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
      <img
        style={{
          width: '600px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
        src={imageList[index]?.url}
        alt="anh xem cho vui"
      />

      <h5>
        {index + 1}/{imageList.length}
      </h5>

      <div
        style={{
          display: 'flex',
        }}
      >
        <Button
          style={{
            marginRight: '20px',
          }}
          icon={<i className="fa-solid fa-chevron-left fa-xl" />}
          title="Previous"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onPreviousImage}
        />

        <Button
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onNextImage}
        />
      </div>
    </div>
  );
}

export default ImageSlider2;
