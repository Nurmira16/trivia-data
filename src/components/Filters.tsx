import React, { FC } from 'react';
import { Category } from '../api/opentdb';

type Props={
    categories:Category[];
    selected: string|null;
    onSelect:(category:string|null)=>void;
}
const Filters: FC<Props>=({categories,selected,onSelect}) => {
    return (
        <div className='filters'>
            <button className={selected===null?'active':''} onClick={()=>onSelect(null)}>All</button>
            {categories.map((cat)=>(
                <button key={cat.id} 
                        className={selected===cat.name?'active':''}
                        onClick={()=>onSelect(cat.name)}
                        >
                            {cat.name}
                        </button>
            ))}
        </div>
    );
};

export default Filters;