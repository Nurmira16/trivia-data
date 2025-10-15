import React, { useEffect } from 'react';
import { fetchCategories, fetchQuestions } from './api/opentdb';

const App = () => {
  useEffect(()=>{
    fetchQuestions().then(res=>console.log(res))
  },[])
  return (
    <div className='app'>
      Trivia Visualization App
    </div>
  );
};

export default App;