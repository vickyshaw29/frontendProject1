import React from 'react'
import Headers from './components/Headers'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './components/Theme'
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Headers />
      </ThemeProvider>
    </div>
  )
}

export default App
