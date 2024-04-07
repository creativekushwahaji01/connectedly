import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []); // Add empty dependency array

    const Collectdata = async () => {
        console.log(name, email, password);
        const result = await fetch('http://localhost:5000/register', {
            method: 'POST', // Fixed method name to uppercase
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json', // Fixed content-Type header
            },
        });
        if (result.ok) { // Check if response is successful
            const data = await result.json(); // Parse JSON response
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/');
        } else {
            console.error('Failed to register user');
        }
    };

    return (
        <div className='SignUp'>
            <h1>Register user</h1>
            <div className='userinput'>
                <input className='input' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />

                <input className='input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter mail' />

                <input className='input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Set password' />

                <button onClick={Collectdata} className='signup_button input'>SignUp</button> {/* Pass reference to Collectdata */}
            </div>
        </div>
    );
}

export default SignUp;
