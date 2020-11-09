import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <img
          src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"
          className="loading-gif"
          alt="loading"
        />
      </div>
    </>
  );
};
export default Loading;
