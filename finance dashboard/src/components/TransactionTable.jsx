import { useFinance } from '../context/FinanceContext'

export default function TransactionTable() {
  const { filtered } = useFinance()

  // empty state
  if (filtered.length === 0) {
    return <p className="text-gray-400 text-center py-10">No transactions found.</p>
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-400 border-b border-gray-700">
          <th className="pb-3">Date</th>
          <th className="pb-3">Description</th>
          <th className="pb-3">Category</th>
          <th className="pb-3">Type</th>
          <th className="pb-3 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((t) => (
          <tr key={t.txn_id} className="border-b border-gray-700">
            <td className="py-3 text-gray-400">{t.date}</td>
            <td className="py-3">{t.description}</td>
            <td className="py-3 text-gray-400">{t.category}</td>
            <td className="py-3">
              <span className={t.type === 'income' ? 'text-green-400' : 'text-red-400'}>
                {t.type}
              </span>
            </td>
            <td className="py-3 text-right font-medium">
              <span className={t.type === 'income' ? 'text-green-400' : 'text-red-400'}>
                {t.type === 'income' ? '+' : '-'} ₹{t.amount.toLocaleString('en-IN')}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}