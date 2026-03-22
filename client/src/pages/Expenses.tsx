import { useState } from 'react'

function Expenses() {
  const [expenses, setExpenses] = useState([])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Despesas</h1>
      <p className="text-gray-600">Ainda não há despesas registadas.</p>
    </div>
  )
}

export default Expenses
