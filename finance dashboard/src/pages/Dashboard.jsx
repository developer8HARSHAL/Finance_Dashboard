import React, { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import StatsCard from '../components/StatsCard';
import SideBar from '../components/SideBar';
import TransactionTable from '../components/TransactionTable';
import { useFinance } from '../context/FinanceContext';

export default function Dashboard() {

  const { dark, toggletheme } = useTheme();
  const { balance, totalIncome, totalExpense, transactions } = useFinance();
  console.log(balance, totalIncome, totalExpense, transactions.length)

  return (
    <div className="flex h-screen w-screen overflow-hidden transition-colors duration-300 bg-gray-100">
      {/* sidebar */}
      <aside className='w-40 h-[90%] rounded-2xl mx-6 mt-10 bg-gray-800 dark:bg-gray-800 shrink-0 text-black '>
        <SideBar />
      </aside>



      {/* main */}
      <div className='flex flex-1 flex-col h-full overflow-hidden bg-gray-200 '>
        {/* header content */}
        <header className="h-16 shrink-0 flex items-center justify-between px-6  border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-semibold text-black dark:text-black">
            Finance Dashboard
          </h1>
          <button
            onClick={toggletheme}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-white"
          >
            {dark === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </header>


        {/* main class*/}
        <main className='flex-1 overflow-x-auto p-6 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
            <StatsCard title="total balance" value={balance} prefix="₹" />
            <StatsCard title="total income" value={totalIncome} prefix="₹" />
            <StatsCard title="total expense" value={totalExpense} prefix="₹" />
          </div>
          {/* chart*/}

          <div className='flex gap-8'>
            <div className='w-40 h-40 shrink-0 bg-white dark:bg-white  rounded-2xl p-6'>
            </div>

            <div className='flex-2 bg-gray-800 dark:bg-white rounded-2xl p-6 min-h-[350px]'>
              graph
            </div>
            <div className='w-80  shrink-0 bg-sky-100 dark:bg-white  rounded-2xl p-6'>
              <SideBar />
            </div>

          </div>

        </main>


      </div>




    </div>
  )
}









