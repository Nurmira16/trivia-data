import { useEffect, useState } from "react";
import { Category, fetchCategories, fetchQuestions, Question } from "../api/opentdb";
import { countBy } from "../utils/data";

export default function useQuestions(){
    const [questions,setQuestions]=useState<Question[]>([]);
    const [categories,setCategories]=useState<Category[]>([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState<string|null>(null)

    useEffect(() => {
        const loadData = async () => {
          setLoading(true);
          try {
            const cachedCats = localStorage.getItem('trivia_categories');
            let cats: Category[];
            if (cachedCats) {
              cats = JSON.parse(cachedCats);
            } else {
              cats = await fetchCategories();
              localStorage.setItem('trivia_categories', JSON.stringify(cats));
            }
            setCategories(cats);
            const cachedQs = localStorage.getItem('trivia_questions');
            let qs: Question[];
            if (cachedQs) {
              qs = JSON.parse(cachedQs);
            } else {
              qs = await fetchQuestions(20); // fetch smaller batch
              localStorage.setItem('trivia_questions', JSON.stringify(qs));
            }
    
            setQuestions(qs);
          } catch (err) {
            setError(String(err));
          } finally {
            setLoading(false);
          }
        };
    
        loadData();
      }, []);

    const byCategory=countBy(questions,(q)=>q.category)
    const byDifficulty=countBy(questions, (q)=>q.difficulty)

    return {questions,categories,byCategory,byDifficulty,loading,error}


}