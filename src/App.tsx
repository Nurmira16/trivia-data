import { useEffect } from 'react';
import useQuestions from './hooks/useQuestions';

const App = () => {
  const {questions,categories,byCategory,byDifficulty}=useQuestions()

  useEffect(()=>{
      console.log(questions)
  },[questions])
  return (
    <div className='app'>
      Trivia Visualization App
    </div>
  );
};

export default App;