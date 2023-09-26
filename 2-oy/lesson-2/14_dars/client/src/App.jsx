import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <h1 className='text-center'>Register</h1>
      <Register/>

      <br />

      <h1 className='text-center'>Login</h1>

      <Login/>
   
    </div>
  )
}

export default App
