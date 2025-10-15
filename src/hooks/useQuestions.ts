import { useEffect, useState } from "react";
import { Category, fetchCategories, fetchQuestions, Question } from "../api/opentdb";
import { countBy } from "../utils/data";

export default function useQuestions(){
    const [questions,setQuestions]=useState<Question[]>([]);
    const [categories,setCategories]=useState<Category[]>([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState<string|null>(null)

    useEffect(()=>{
        setLoading(true);
        Promise.all([fetchCategories(), fetchQuestions()])
            .then(([cats, qs])=>{
                setCategories(cats);
                setQuestions(qs);
            })
            .catch((err)=>setError(String(err)))
            .finally(()=>setLoading(false));
    },[])

    const byCategory=countBy(questions,(q)=>q.category)
    const byDifficulty=countBy(questions, (q)=>q.difficulty)

    return {questions,categories,byCategory,byDifficulty,loading,error}


}