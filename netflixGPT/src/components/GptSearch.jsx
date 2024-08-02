import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSeggestion from './GptMovieSeggestion'
import { bgImage } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
          className="bg-image bg-cover bg-center min-h-screen object-cover"
          src={bgImage}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSeggestion />
    </div>
  );
}

export default GptSearch
