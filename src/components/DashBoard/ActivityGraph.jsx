
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        desktop: 4000,
        moblie: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        desktop
: 3000,
        moblie: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        desktop: 2000,
        moblie: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        desktop: 2780,
        moblie: 3908,
        amt: 2000,
    },
    {
        name: 'Jun',
        desktop: 1890,
        moblie: 4800,
        amt: 2181,
    },
    {
        name: 'Jul',
        desktop: 2390,
        moblie: 3800,
        amt: 2500,
    },
    {
        name: 'Aug',
        desktop: 3490,
        moblie: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        desktop: 3790,
        moblie: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        desktop: 2190,
        moblie: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        desktop: 1490,
        moblie: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        desktop: 9490,
        moblie: 4300,
        amt: 2100,
    },
];
const ActivityGraph = () => {
    return (
        <>
            <div className="col-span-8 overflow-hidden rounded border border-stone-800">
                <div className='p-4'>
                    <h3 className='flex items-center gap-1.5 font-medium'>
                        <FiUser /> User Activity
                    </h3>
                </div>
                {/* Graph */}
                
                   <LineChart
                   className='w-full h-75 px-4'
                    
                    responsive
                    data={data}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis width="auto"/>
                    <Tooltip />
                    <Legend/>
                    <Line type="monotone" dataKey="moblie" stroke="blue" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="desktop" stroke="green" />
                </LineChart>
                
            </div>                 
            
        </>
    )
}

export default ActivityGraph
