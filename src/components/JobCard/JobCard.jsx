import React from 'react';
import './JobCard.scss';
const JobCard = (props) => {
  return (
    <>
      <div className="job-wrapper">
        <div className="job-container">
          <h1 className="job-title">{props.title}</h1>
          <div className="img-container">
            <img
              src={props.companyImage}
              className="img"
              alt="company logo"
              loading="lazy"
            />
          </div>
          <div className="job-desc">
            <p> Location: {props.location ? props.location : null}</p>
            <p> Posted On: {props.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobCard;
