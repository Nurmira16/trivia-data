import React, { FC } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props={data:{name: string; value:number}[]}

const CategoryBar:FC<Props> = ({data}) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" interval={0} angle={-30} textAnchor='end' height={60}/>
                    <YAxis allowDecimals={false}/>
                    <Tooltip/>
                    <Bar dataKey="value" fill='#007acc'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CategoryBar;

