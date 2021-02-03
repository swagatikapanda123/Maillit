import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Maillit!
      </h1>
     <h3> Collect feedback form your users! </h3>
      <div className="action">
      <Link to="/surveys" className="survey-link">
          {/* <i className="material-icons">eco</i> */}
         Get started!
        </Link>
       </div>
    </div>
  );
};

export default Landing;
