import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// route
import {BrowserRouter as Router} from 'react-router-dom'

// redux
// import { Provider } from 'react-redux'
// import store from './store/index'

//style
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import './index.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <App />
      <ToastContainer theme="colored" />
  </Router>
);
