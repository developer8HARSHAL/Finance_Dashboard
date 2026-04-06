import { createContext, useContext, useState, useEffect } from 'react'

const FinanceContext = createContext()

export default function FinanceProvider({ children }) {

  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [role, setRole] = useState('viewer')
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterMonth, setFilterMonth] = useState('all')

  // fetch runs once when the app loads
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setTransactions(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = 25000 + totalIncome - totalExpense

  const filtered = transactions.filter(t => {
    const matchSearch = t.description.toLowerCase().includes(search.toLowerCase())
    const matchType = filterType === 'all' || t.type === filterType
    const matchMonth = filterMonth === 'all' || t.month === filterMonth
    return matchSearch && matchType && matchMonth
  })

  return (
    <FinanceContext.Provider value={{
      transactions,
      filtered,
      loading,
      error,
      role, setRole,
      search, setSearch,
      filterType, setFilterType,
      filterMonth, setFilterMonth,
      totalIncome,
      totalExpense,
      balance,
      setTransactions
    }}>
      {children}
    </FinanceContext.Provider>
  )
}

export const useFinance = () => useContext(FinanceContext)