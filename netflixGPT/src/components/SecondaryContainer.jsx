import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const nowPlayMovies = useSelector((state) => state.movies.nowPlayingMovies);
    const popularMovies = useSelector((state) => state.movies.popularMovies);
    const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

    return (
      <>
        <div className="bg-black ">
          <div className="relative pl-4 md:pl-8 mt-0 md:-mt-72">
            <MovieList title={'Now Playing'} movies={nowPlayMovies} />
            <MovieList title={'Popular Movies'} movies={popularMovies} />
            <MovieList title={'Upcoming Movies '} movies={nowPlayMovies} />
            <MovieList title={'Trending Movies'} movies={topRatedMovies} />
          </div>
        </div>
      </>
    );
};

export default SecondaryContainer;
