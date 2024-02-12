import React from "react";

function ProfileCard({ title, handle, image, description }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-3by3">
            <img src={image} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media-content">
            <p>{title}</p>
            <p>{handle}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
