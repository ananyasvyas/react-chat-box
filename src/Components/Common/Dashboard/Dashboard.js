import React, {useState} from 'react'
import './Dashboard.css';
import Login from './../../Features/Login/Login';
import Register from './../../Features/Register/Register';

const Dashboard = () => {

    const [isLoggedIn, setLogin] = useState(false)

    const toggle = () => {
        setLogin(!isLoggedIn)
    }

    return (
        <div className="dashboard">
            {
                !isLoggedIn ?
            <div className="register-container">
                <Register />
                <div>
                    <p>Already have an account? <span onClick={toggle}>Login</span> Here</p>
                </div>
            </div>
            :
            <div className="login-container">
                <Login />
                <div>
                    <p>New to sessions? <span onClick={toggle}>Register</span> Here</p>
                </div>
            </div>
            }
            
        </div>
    )
}

export default Dashboard
