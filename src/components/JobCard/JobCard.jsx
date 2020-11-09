import React from 'react';
import './JobCard.scss';
const JobCard = (props) => {
  return (
    <>
      <div className="job-wrapper">
        <div className="job-container">
          <h1 className="job-title">{props.title}</h1>
          <div className="img-container">
            {/* <img src={testImage} className="img" alt="company logo" /> */}
          </div>
          <div className="job-desc">
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobCard;
