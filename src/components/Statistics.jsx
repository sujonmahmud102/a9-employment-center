import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "A1",
        marks: 57,
    },
    {
        name: "A2",
        marks: 59,
    },
    {
        name: "A3",
        marks: 58,
    },
    {
        name: "A4",
        marks: 52,
    },
    {
        name: "A5",
        marks: 47,
    },
    {
        name: "A6",
        marks: 60,
    },
    {
        name: "A7",
        marks: 60,
    }
];


const Statistics = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl font-bold mt-8 text-center'>Assignment Analytics</h2>
            <AreaChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 100,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;