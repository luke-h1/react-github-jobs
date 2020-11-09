import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [text, setText] = useState('');

  const onSubmit = () => {
    console.log('hello');
  };

  const onChange = () => {
    console.log('hello');
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <form onSubmit={onSubmit} className="form">
            <input
              type="text"
              name="text"
              placeholder="search Jobs"
              value={text}
              onChange={onChange}
              className="form-input"
            />
            <input type="submit" value="submit" className='btn' /> 
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
