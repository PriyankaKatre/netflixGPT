import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  let movieUrl =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

  const getNowPlayingMovies = async () => {
    const res = await fetch(movieUrl, options);
    const json = await res.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
