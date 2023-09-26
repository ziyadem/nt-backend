import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate=useNavigate()
  let tokenId=localStorage.getItem('token')
  useEffect(()=>{
   if(tokenId){
    return navigate("/courses");
   }
  },[])
  return (
    <section className="maxDiv">
      <h2>Home</h2>
      <div className="d-flex gap-3">
        <Link to="/login" type="button" class="btn btn-danger">
          Log In
        </Link>
        <Link to="/register" type="button" class="btn btn-danger">
          Register
        </Link>
      </div>
    </section>
  );
}

export default Home
