import React, {useState} from 'react'
import Header from '../../Common/Header/Header';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: user
        })
        .then(result => {
            console.log('Login result ', result);
        })
        .catch(error => {
            console.log('Login error ', error);
        })
    }

    return (
        <>
            <Header />
            <div className="login-container">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="email" name="email" minLength="3" maxLength="20" placeholder="Email" onChange = {onEmailChange} />
                    </div>
                    <div className="form-control">
                        <input type="password" name="password" minLength="3" maxLength="20" placeholder="Password" onChange = {onPasswordChange} />
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
        
    )
}

export default Login
