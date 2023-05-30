import React from 'react'
import { Link } from 'react-router-dom'

import './registerpage.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto" style={{width: '100vw', height:'100vh',}}>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" style={{width: '100vw', height:'100vh', textAlign:'center'}}>
                <div>
                    <legend>Username:</legend><br/>
                    <input type="text" name="first_name" required />
                </div>
                <div>
                    <legend>Email address:</legend><br/>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <legend>Password:</legend><br/>
                    <input type="password" name="password" requiredc />
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </div>
                <div>
                    <button id="sub_btn" type="submit">Register</button>
                </div>
                <div> I have an account <Link to="/login">Login account</Link>.</div>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
