
import React from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, AreaChart, CartesianGrid, Area } from 'recharts';

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
        <div class="container overflow-hidden mt-4">
            <div class="row gy-2">
                <div class="col-md-6">
                    <div class="p-3">
                    <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Legend />
                </LineChart>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3">
                    <AreaChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#82ca9d" />
                        <Legend />
                    </AreaChart>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3">
                    <BarChart width={450} height={540} data={data}>
                    <Bar dataKey={"sell"} fill="#8884d8" />
                    <XAxis dataKey={"sell"}></XAxis>
                    <YAxis></YAxis>
                    <Legend />
                </BarChart>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3">
                    <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                    <Legend />
                </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;