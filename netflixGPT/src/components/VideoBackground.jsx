import React from 'react';
import { useSelector } from 'react-redux';
import { useTrailerVideo } from '../hooks/UseTrailerVideo';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          'https://www.youtube-nocookie.com/embed/' +
          trailerVideo?.key +
          '?&autoplay=1&mute=1'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
