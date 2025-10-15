import { useEffect, useState } from 'react';
import useQuestions from './hooks/useQuestions';
import Header from './components/Header';
import Filters from './components/Filters';
import CategoryBar from './components/CategoryBar';
import DifficultyPie from './components/DifficultyPie';

const App = () => {
  const {questions,categories,byCategory,byDifficulty,loading,error}=useQuestions()
  const [selectedCategory,setSelectedCategory]=useState<string|null>(null);

  if(loading) return <div>Loading</div>
  if(error)return <div>Error: {error}</div>

  const filteredQuestions=selectedCategory?questions.filter(q=>q.category===selectedCategory):questions;


  const difficultyCounts: Record<string, number> = {};
  filteredQuestions.forEach(q => {
    difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
  });

  const difficultyData=['easy','medium','hard'].map(d=>({
    name:d,
    value: difficultyCounts[d]||0
  }))

  const categoryData=Object.entries(byCategory).map(([name,value])=>({name,value}))

  return (
    <div className='app'>
      <Header/>
      <Filters categories={categories} selected={selectedCategory} onSelect={setSelectedCategory}/>
      <CategoryBar data={categoryData}/>
      <DifficultyPie data={difficultyData}/>
    </div>
  );
};

export default App;