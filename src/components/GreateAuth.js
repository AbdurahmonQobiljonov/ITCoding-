import React from "react";

const GreateAuth = (props) => {
  return (
    <div className="auth_container">
      <div className="auth_box">
        <div className="auth_left">{props.left}</div>
        <div className="auth_right">{props.right}</div>
      </div>
    </div>
  );
};

export default GreateAuth;
