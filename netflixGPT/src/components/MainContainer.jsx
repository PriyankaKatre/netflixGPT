import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { useNowPlayingMovies } from '../hooks/UseNowPlayingMovies';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
      useNowPlayingMovies();

      const movies = useSelector((state) => state?.movies.nowPlayingMovies);
      if (!movies) return;
      const { original_title, overview, id } = movies[0];


      return (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />

         
        </>
      );
};

export default MainContainer;
