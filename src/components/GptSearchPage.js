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
    <>
    <div className='fixed -z-10'>
      <img className="h-screen object-cover w-screen" src={BACKGROUND_IMG} alt="bg-image"/>
    </div>
    <div className='pt-[30%] md:p-0'>
    <GptSearchbar />
    <GptMovieSuggestions />
    </div>
    </>
      
  )
}

export default GptSearchPage;