import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
     const topRatedMoviesFromStore = useSelector((state) => state.movies.topRatedMovies);

  let movieUrl =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  const topRatedMovies = async () => {
    try {
      const res = await fetch(movieUrl, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
    }
  };


  useEffect(() => {
    !topRatedMoviesFromStore && topRatedMovies();
  }, []);
};
