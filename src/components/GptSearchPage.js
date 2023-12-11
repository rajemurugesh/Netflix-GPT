import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG}
          alt="backgroun-img"
        />
      </div>
      <GptSearchbar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;