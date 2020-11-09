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
      fetchData(text);
    }
  };

const fetchData = async (text) => { 
  setLoading(true);
  const API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${text}`;
  const res = await fetch(API_URL); 
  const json = await res.json();
  console.log(json);
  setLoading(false);
  // json.forEach((job) => (
  //   // <JobCard job={job} key={job.id} /> 
  // ))
}


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
