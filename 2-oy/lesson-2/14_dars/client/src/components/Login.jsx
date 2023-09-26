import { useState } from 'react'

function Login() {

    const getUserInfo = (e) => {
        e.preventDefault()
    
        let { suppername, password } = e.target

        alert(suppername.value)
        
    
        fetch("http://localhost:5000/login", {
            method: "POST", 
            body: JSON.stringify({
                suppername: suppername.value,
                password: password.value
            })
        })
         .then(res => res.json())
           .then(data => data.data && localStorage.setItem("user_info", JSON.stringify(data.data)))
    
    
           suppername.value = ''
           password.value = ''
        }
    

    return (
        <div className="login">
            <div className='container justify-content-center d-flex mt-5'>
                <form onSubmit={(e) => getUserInfo(e)}>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" name='suppername' class="form-control" placeholder="Enter username" id="username"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name='password' class="form-control" placeholder="Enter password" id="pwd"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
