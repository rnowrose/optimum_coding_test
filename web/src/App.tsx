import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/base/NavBar'
import theme from './theme/main'
import { CssBaseline, ThemeProvider } from '@mui/material'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
      </div>
    </ThemeProvider>
  )
}

export default App
