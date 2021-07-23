import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '../src/routes/index'
import 'semantic-ui-css/semantic.css'
import { HashRouter as Router } from 'react-router-dom'
// import { Provider } from "react-redux"
// import store from "./store/index"
//redux implements
// ReactDOM.render(
//     <Provider store={store()} >
//         <App />
//     </Provider>,
//     document.getElementById('app'))

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
)
