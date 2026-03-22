import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard TVDE</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Gastos</h2>
          <p className="text-3xl font-bold text-green-600">€0,00</p>
          <Link to="/expenses" className="text-blue-500 hover:underline">Ver detalhes</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Receitas</h2>
          <p className="text-3xl font-bold text-blue-600">€0,00</p>
          <Link to="/income" className="text-blue-500 hover:underline">Ver detalhes</Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Lucro</h2>
          <p className="text-3xl font-bold text-purple-600">€0,00</p>
          <Link to="/reports" className="text-blue-500 hover:underline">Ver relatórios</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
