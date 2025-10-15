export type Category={id:number; name:string};

export type Question={
    category: string;
    type: string;
    difficulty:'easy' | 'medium' |'hard';
    question: string;
    correct_answer: string;
    incorrect_answers: string []
}

const API_BASE='https://opentdb.com';

export async function fetchCategories(): Promise<Category[]> {
    const res= await fetch(`${API_BASE}/api_category.php`);
    if(!res.ok) throw new Error('Failed to fetch categories');
    const data=await res.json();
    return data.trivia_categories
}
export async function fetchQuestions(amount=50): Promise<Question[]> {
    const res= await fetch(`${API_BASE}/api.php?amount=${amount}`);
    if(!res.ok) throw new Error('Failed to fetch questions');
    const data=await res.json();
    return data.results
}
