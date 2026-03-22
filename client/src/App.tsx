import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Income from './pages/Income'
import Reports from './pages/Reports'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/income" element={<Income />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  )
}

export default App
