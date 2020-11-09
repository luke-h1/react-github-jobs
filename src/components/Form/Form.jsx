import React, { useState } from 'react';
import './Form.scss';
import Error from '../Error/Error';
const Form = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); 
    if(text === '' || text === null) {
      setError(true);
      setTimeout(() => { 
        setError(false)
      },1000)
    }else { 

    }
  };

  const onChange = () => {
    console.log('hello');
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          {error ? <Error />   : null}
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
