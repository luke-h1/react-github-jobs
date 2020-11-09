import React, { useState } from 'react';
import './Form.scss';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
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
      // get the data 
      setLoading(true);
    }
  };

  const onChange = (e) => {
    setText(e.target.value ? e.target.value : '');
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          {error ? <Error />   : null}
          {loading ? <Loading /> : null}
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
