import React from 'react';
import './Error.scss';

const Error = (props) => {
  return (
    <>
      <div className="e-container">
        <h1 className="error-h1">{props.msg}</h1>
      </div>
    </>
  );
};
export default Error;
