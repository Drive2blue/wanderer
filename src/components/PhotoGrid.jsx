import React from "react";
import lifecycle from "react-pure-lifecycle";
import PropTypes from "prop-types";

const methods = {
  componentDidMount({ userId, getAlbumPhotos }) {
    getAlbumPhotos(userId);
  }
};

const PhotoGrid = ({ albumPhotos }) => {
  return (
    <div>
      <h1> Photos </h1>
      {albumPhotos.map(photo => {
        return (
          <img
            src={photo.image_url}
            className="post-image"
          />
        );
      })}
    </div>
  );
};

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default lifecycle(methods)(PhotoGrid);
