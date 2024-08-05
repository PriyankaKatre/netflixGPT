import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

export const usePopularMovies = () => {
    const dispatch = useDispatch();
     const popularMovies = useSelector((state) => state.movies.popularMovies);

  let movieUrl =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  const getPopularMovies = async () => {
    try {
      const res = await fetch(movieUrl, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [dispatch]);
};
