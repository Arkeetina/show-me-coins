import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found-page-container">
    <div className="not-found-message">
      <p>404</p>
      <p>Page not found :(</p>
      <p><Link className="not-found-link" to="/">Go home</Link></p>
    </div>
  </div>
);

export default NotFoundPage;
