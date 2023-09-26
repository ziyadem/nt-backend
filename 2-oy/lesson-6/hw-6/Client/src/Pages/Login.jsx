import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  let navigate=useNavigate()
  let tokenId=localStorage.getItem('token');
  useEffect(()=>{
   if(tokenId){
    navigate("/")
   }
  },[])
  let handleSubmit=async (e)=>{
    e.preventDefault();
    let {suppername,password}=e.target;
    console.log(suppername.value,password.value);
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password.value,
        suppername: suppername.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          return toast(data.msg, { type: "error" });
        }
        toast(data.msg, { type: "success" });
        localStorage.setItem("token",data.token)
        navigate("/")
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

  return (
    <>
      <div className="maxDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Log In</h2>
          <div className="form-group">
            <input
              type="text"
              name="suppername"
              className="form-control"
              placeholder="suppername"
              id="suppername"
              required
              min={3}
            />
          </div>
          <div class="form-group">
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
          <button type="submit" class="btn btn-danger">
            Login
          </button>
          <Link
            to="/register"
            className="text-danger p-4 text-decoration-underline"
          >
            Register
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login
