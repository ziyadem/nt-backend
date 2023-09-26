import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate=useNavigate()
  function handleRegister() {
    localStorage.clear("token")
    navigate("/register")
  }
  function handleLogin() {
    localStorage.clear("token");
    navigate("/login")
  }
  return (
    <header>
      <nav className="container">
        <Link to="/">
          <img src="/logo.jpg" alt="logo" />
        </Link>

        <ul>
          <li>
            <Link to="/courses" className="text-decoration-none fs-5">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/fruits" className="text-decoration-none fs-5">
              Fruits
            </Link>
          </li>
          <li>
            <Link to="/cars" className="text-decoration-none fs-5">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/animals" className="text-decoration-none fs-5">
              Animals
            </Link>
          </li>
        </ul>
        <div>
          <button className="btn btn-danger me-3" onClick={handleRegister}>
            Create Account
          </button>
          <button className="btn btn-danger" onClick={handleLogin}>
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header
