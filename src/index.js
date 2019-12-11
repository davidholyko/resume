import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Application = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Application />, document.getElementById('root'))
