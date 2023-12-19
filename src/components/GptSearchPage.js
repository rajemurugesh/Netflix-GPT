import React, { useEffect } from 'react'
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { resetMovieList } from '../utils/gptSlice';

const GptSearchPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(resetMovieList())
  }, [dispatch]);
  return (
    <div>
      <div className="fixed -z-10">
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