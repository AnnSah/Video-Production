import React from 'react';
import "./HomeSection.css";

function HomeSection({ title, description, src }) {
  return (
    <div className="row__1">
      <img src={src} />
      <div className="col-1-of-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HomeSection;

{/* <img src="https://thumbs.dreamstime.com/b/professional-male-photographer-digital-photo-camera-photo-studio-isolated-grey-photographer-102998392.jpg" alt="#" />
<div className="col-1-of-2">
    <h3>Photographer</h3>
    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        magnam id fuga cupiditate possimus earum expedita, nostrum
        temporibus ab sit, fugit laudantium molestiae minus explicabo
        pariatur ea inventore enim excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        magnam id fuga cupiditate possimus earum expedita, nostrum
        temporibus ab sit, fugit laudantium molestiae minus explicabo
        pariatur ea inventore enim excepturi?</p>
</div> */}