import React from 'react';

const FetchErrorPage = () => (
  <div className="not-found-page-container">
    <div className="not-found-message">
      <p>Failed to fetch information, please try again</p>
      <p><a className="not-found-link" href="/">Go home</a></p>
    </div>
  </div>
);

export default FetchErrorPage;
