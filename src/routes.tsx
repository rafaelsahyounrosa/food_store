import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant1 from './pages/Restaurant1'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/1" element={<Restaurant1 />} />
  </Routes>
)

export default Rotas
