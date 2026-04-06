import React from 'react'
import FinanceProvider from '../context/FinanceContext'

export default function StatsCard({title,value, prefix}) {

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
      <p className='text-sm text-gray-500 dark:text-gray-400'>{title}</p>     
      <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
        {value}{prefix.toLocaleString('en-IN')}</p>     
    </div>
  )
}
