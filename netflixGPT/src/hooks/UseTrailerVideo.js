import { useEffect } from 'react';
import { options } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
     const trailerVideo = useSelector(
       (state) => state.movies.trailerVideo
     );

  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const json = await res.json();

    const filterData = json.results.filter((video) => video.type === 'Trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};
