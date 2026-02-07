import { TrendingUp, TrendingDown } from 'lucide-react'
import React from 'react'

const cardData = [
    {
        id: 1,
        title: "Gross Revenue",
        value: "$120,054.24",
        pillText: "2.75%",
        trend: "up",
        period: "From Jan 1st - Jul 31st"
    },
    {
        id: 2,
        title: "Avg Order",
        value: "$256,034.97",
        pillText: "1.01%",
        trend: "down",
        period: "From Jan 1st - Jul 31st"
    },
    {
        id: 3,
        title: "Trailing Year",
        value: "$278,054.24",
        pillText: "60.75%",
        trend: "up",
        period: "Previous 365 days"
    }
]

const StatCards = () => {
    return (
        <div className='col-span-4  grid gap-4  md:grid-cols-3'>
            {cardData.map(({ id, title, value, pillText, trend, period }) => (
                <div key={id}
                    className='bg-gray-800 p-4 rounded-lg shadow border-white/30 border'>

                    <div className="flex justify-between items-start mb-8">
                       <div>
                        <h3 className="text-sm text-gray-300 mb-2">{title}</h3>
                        <p className="text-3xl font-semibold text-white">{value}</p>
                       </div>

                       <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded
                        ${trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {pillText}
                        </span>
                    </div>

                    <p className="text-xs text-gray-400">{period}</p>
                </div>
            ))}
        </div>
    )
}

export default StatCards

