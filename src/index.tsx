import React from 'react'
import ReactDOM from 'react-dom'
import Home from './page/home'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)
