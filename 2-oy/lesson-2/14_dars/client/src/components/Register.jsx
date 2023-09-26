import { useState } from 'react'

function Register() {


   const getUserInfo = (e) => {
    e.preventDefault()

    let { username, email, password } = e.target

    alert(email.value)
    alert(password.value)
    

    fetch("http://localhost:5000/register", {
        method: "POST", 
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    })
     .then(res => res.json())
       .then(data => alert(data.msg))


       username.value = ''
       email.value = ''
       password.value = ''
    }

    return (
        <div className="register">
            <div className='container justify-content-center d-flex mt-5'>
                <form onSubmit={(e) => getUserInfo(e)}>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" name='email' class="form-control" placeholder="Enter email" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" name='username' class="form-control" placeholder="Enter username" id="username"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name='password' class="form-control" placeholder="Enter password" id="pwd"/>
                    </div>
                    <button type="submit" class="btn btn-primary">register</button>
                </form>
            </div>

        </div>
    )
}

export default Register
