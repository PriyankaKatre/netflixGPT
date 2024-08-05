import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  let movieUrl =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(movieUrl, options);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
    }
  };


    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
