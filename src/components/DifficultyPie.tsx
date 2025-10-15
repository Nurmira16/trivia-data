import React, { FC } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props={ data: {name:string; value:number}[]};

const COLORS=['green', 'yellow', 'red']
const DifficultyPie:FC<Props>= ({data}) => {
    return (
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey='value'
                    data={data}
                    nameKey='name'
                    outerRadius={80}
                    label>
                        {data.map((_, index)=>(
                            <Cell key={index} fill={COLORS[index%COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DifficultyPie;