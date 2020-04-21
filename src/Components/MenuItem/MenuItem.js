import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, image, size, linkUrl, history, match }) => {
  //console.log("history", history);
  //console.log("match", match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/*match.url = /sport-store
            linkUrl = shop/hats 
            onClick -> redirect to path
          this.props.history.push('path')*/}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
//HOC takes component and modifies it
//returns MenuItem with acces to history, match
