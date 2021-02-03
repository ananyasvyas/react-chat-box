import React, {useState} from 'react'
import Header from '../../Common/Header/Header';
import './Register.css'
import HomeCard from '../../MaterialComponents/HomeCard';

const Register = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobile, setMobileNumber] = useState('');

    const onFullNameChange = (e) => {
        setFullName(e.target.value);
    }
    const onEmailChange = (e) => {
            setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const onMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            fullName,
            email,
            password,
            confirmPassword,
            mobile
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
        <div>
            <Header />
            <HomeCard />
            <div className="reg-container">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="text" name="fullName" minLength="3" maxLength="20" placeholder="Name" onChange = {onFullNameChange} />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" minLength="3" maxLength="20" placeholder="Email" onChange = {onEmailChange} />
                    </div>
                    <div className="form-control">
                        <input type="password" name="password" minLength="3" maxLength="20" placeholder="Password" onChange = {onPasswordChange} />
                    </div>
                    <div className="form-control">
                        <input type="password" name="confirmPassword" minLength="3" maxLength="20" placeholder="Confirm Password" 
                            onChange = {onConfirmPasswordChange} />
                    </div>
                    <div className="form-control">
                        <input type="number" name="mobile" minLength="10" maxLength="10" placeholder="Mobile" onChange = {onMobileNumberChange} />
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Register
