import React from 'react';
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../hooks/UsePopularMovies';
import { useTopRatedMovies } from '../hooks/UseTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const isGptSearchView = useSelector((state) => state.gpt.showGptSearch);

  return (
    <>
      <Header />
      {isGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
