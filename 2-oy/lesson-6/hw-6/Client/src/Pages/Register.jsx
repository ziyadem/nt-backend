import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from "react-toastify";

const Register = () => {
   let navigate = useNavigate();
   let tokenId = localStorage.getItem("token");
    useEffect(() => {
      if (tokenId) {
        navigate("/");
      }
    }, []);
  const getUserInfo= async (e)=> {
    e.preventDefault();
    
    let { username, email, password,fname, confirmPassword } = e.target;
    if (password.value !== confirmPassword.value) {
     return toast("confirmPassword error",{type:"error"});
    }
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        fname: fname.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status!==201){return toast(data.msg, { type: "error" });}
        toast(data.msg, { type: "success" });
        localStorage.setItem('token',data.token)
        navigate("/")
      })
      .catch((rejected) => {
        console.log(rejected);
      }); 
  }

  return (
    <>
      <div className="maxDiv">
        <form onSubmit={(e) => getUserInfo(e)}>
          <h2>Register</h2>
          <div className="form-group">
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="Your name"
              id="name"
              required
              min={3}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your email"
              id="email"
              required
              min={3}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              id="username"
              required
              min={3}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              id="pwd"
              required
              min={3}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="confirmPassword"
              id="pwd"
              required
              min={3}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            register
          </button>
          <Link
            to="/login"
            className="text-danger p-4 text-decoration-underline"
          >
            Log In
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register
