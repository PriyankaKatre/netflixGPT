import React from 'react';
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();

  const movies = useSelector((state) => state?.movies.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];

  return (
    <>
      <Header />
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
