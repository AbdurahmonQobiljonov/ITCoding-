import React from "react";
import { Link } from "react-router-dom";

const ErrorItem = () => {
  return (
    <div className="error_not_box">
      <div className="error_not_found">
        <img src="../../img/404.jpg" alt="error" />
        <h2>Page not found</h2>
        <Link to="/" className="btn">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorItem;
