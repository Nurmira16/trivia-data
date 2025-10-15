import React, { FC } from 'react';
import { Bar, BarChart, CartesianAxis, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props={data:{name: string; value:number}[]}

const CategoryBar:FC<Props> = ({data}) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 20, bottom: 80, left: 20 }}>
                    <CartesianAxis stroke="#eee" strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} angle={-30} textAnchor='end' height={60} tick={{ fontSize: 12 }}/>
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip/>
                    <Bar dataKey="value" fill="#007acc" barSize={40} radius={[4, 4, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CategoryBar;

