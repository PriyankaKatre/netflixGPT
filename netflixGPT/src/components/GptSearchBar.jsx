import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langinitial = useSelector((state) => state.config.lang);

  return (
    <div>
      <div className="pt-[45%] md:pt-[10%] flex justify-center ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-1/2 mx-2 md:mx-0  bg-gray-950 grid grid-cols-12 rounded-md shadow-2xl"
        >
          <input
            // ref={searchText}
            type="text"
            className="py-3 md:px-5 px-2 m-4 md:ml-8 ml-3 text-sm md:text-md col-span-9 rounded-md"
            placeholder={lang[langinitial].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 my-4 md:mr-8 mr-3 py-3 md:px-4  text-sm md:text-md bg-red-700 text-white rounded-md font-semibold"
            //onClick={handleGptSearchClick}
          >
            {lang[langinitial].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
