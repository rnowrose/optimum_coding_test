import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/base/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
      </div>
  )
}

export default App
