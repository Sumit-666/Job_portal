import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <div class="error">Want Jobs!</div>
        <br />
        <br />
        <span class="info">What you desire is here</span>
        {/* <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          class="static"
          alt=""
        /> */}
        <div className="home-button">
          <Link to="/Home">Go To Home</Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;