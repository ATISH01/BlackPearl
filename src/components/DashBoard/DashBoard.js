import { Tooltip } from 'bootstrap';
import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='p-3  row'>
            <div className='col-md-6'>
                <LineChart width={400} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='col-md-6'>
                <BarChart width={450} height={540} data={data}>
                    <Bar dataKey={"sell"} fill="#8884d8" />
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;