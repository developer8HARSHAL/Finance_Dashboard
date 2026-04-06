import React, { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import StatsCard from '../components/StatsCard';
import SideBar from '../components/SideBar';
import { useFinance } from '../context/FinanceContext';
import SpendingChart from '../components/SpendingChart';
import TrendChart from '../components/TrendChart';
export default function Dashboard() {

  const { dark, toggletheme } = useTheme();
  const { balance, totalIncome, totalExpense, filtered, search, setSearch, filterType, setFilterType, filterMonth, setFilterMonth, transactions, role, setRole } = useFinance();
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
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-white "
          >
            {dark === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="px-3 py-1.5 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-white outline-none "
          >
            <option value="viewer">👁 Viewer</option>
            <option value="admin">🛠 Admin</option>
          </select>
          {role === 'admin' && <th className="text-left p-3">Actions</th>}
        </header>


        {/* main class*/}
        <main className='flex-1 overflow-y-auto p-6 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
            <StatsCard title="total balance" value={balance} prefix="₹" />
            <StatsCard title="total income" value={totalIncome} prefix="₹" />
            <StatsCard title="total expense" value={totalExpense} prefix="₹" />
          </div>
          {/* chart*/}

          <div className='flex lg:flex-2 md:flex-1 gap-8'>
            <div className='flex-1  bg-white dark:bg-gray-800 rounded-2xl p-6 min-h-[350px]'>
              <TrendChart />
            </div>
            <div className='flex-1  shrink-0 bg-white dark:bg-gray-800  rounded-2xl p-6'>
              <SpendingChart />
            </div>

          </div>


          <div className='flex gap-3 p-3 bg-gray-800 rounded-t-2xl mt-8'>


            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search description..."
              className="flex-1 px-3 py-1.5 rounded-lg text-sm bg-gray-200 text-black placeholder-gray-400 outline-none"
            />
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-sm bg-gray-200 text-black outline-none"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <select
              value={filterMonth}
              onChange={e => setFilterMonth(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-sm bg-gray-200 text-black outline-none"
            >
              <option value="all">All Months</option>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="overflow-y-auto max-h-80 bg-white text-black dark:text-white dark:bg-gray-800 rounded-2xl mt-6 ">

            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-gray-800 text-white">
                <tr>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Description</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Type</th>
                  <th className="text-left p-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.txn_id} className="border-b border-gray-700">
                    <td className="p-3">{t.date}</td>
                    <td className="p-3">{t.description}</td>
                    <td className="p-3">{t.category}</td>
                    <td className="p-3">{t.type}</td>
                    <td className="p-3">₹{t.amount.toLocaleString('en-IN')}
                      {role === 'admin' && (
                        <td className="p-3">
                          <button
                            onClick={() => handleDelete(t.txn_id)}
                            className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>


      </div>




    </div>
  )
}









