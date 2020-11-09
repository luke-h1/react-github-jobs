import React from 'react';
import './JobCard.scss';
import testImage from '../../test.jpeg';
const JobCard = (props) => {
  return (
    <>
      <div className="job-wrapper">
        <div className="job-container">
          <h1 className="job-title">Title Goes here</h1> 
          <div className="img-container">
            <img src={testImage} className='img' alt='company logo'/> 
          </div>
          <div className="job-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              incidunt accusamus repellat maxime nisi sed dolore, animi
              perspiciatis, atque qui nobis temporibus esse optio corrupti quas
              praesentium ea! Esse, voluptates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobCard;
