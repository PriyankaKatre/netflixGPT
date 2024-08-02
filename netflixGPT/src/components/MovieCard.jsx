import React from 'react';
import { img_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-44 pr-6 shadow-lg ">
      <img className="rounded-lg" src={`${img_CDN}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
