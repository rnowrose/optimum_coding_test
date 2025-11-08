import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/base/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <h1>Optimum Coding Test</h1>
      <Outlet />
      </div>
  )
}

export default App
