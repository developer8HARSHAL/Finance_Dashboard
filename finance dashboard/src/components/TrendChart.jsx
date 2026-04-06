import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useFinance } from '../context/FinanceContext'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function TrendChart() {
  const { transactions } = useFinance()

  const data = MONTHS.map(month => {
    const monthly = transactions.filter(t => t.month === month)
    return {
      month,
      income: monthly.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0),
      expense: monthly.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0),
    }
  }).filter(d => d.income || d.expense)  // hide months with no data

  if (!data.length) return <p className="text-gray-400 text-sm text-center mt-10">No trend data</p>

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
        <Tooltip formatter={v => `₹${v.toLocaleString('en-IN')}`} />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}