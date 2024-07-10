import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading container">
      <div className="loading__left">
        <div className="loading__left__img bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
      </div>
      <div className="loading__right">
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
        <div className="loading__item bg__animation"></div>
      </div>
    </div>
  );
};

export default Loading;
