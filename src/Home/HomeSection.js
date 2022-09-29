import React from 'react';
import "./HomeSection.css";

function HomeSection({ title, description, src }) {
  return (
    <div className="row__1">
      <img src={src} alt="/" />
      <div className="col-1-of-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HomeSection;

