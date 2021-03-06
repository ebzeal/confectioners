import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ name, imageUrl, size, history, linkUrl, match }) => {
  const newPath = match.url.split('/')
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${newPath[0]}/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{name.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
