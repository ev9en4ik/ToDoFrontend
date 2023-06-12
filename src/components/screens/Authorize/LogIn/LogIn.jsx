import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const LogIn = () => {
    const [email, setEmail] = useState('JackD@gmail.com');
    const [password, setPassword] = useState('qwerty02');

    /*TODO remove logIn Method*/

    const Navigate = useNavigate();

    const config = {
        secure: false,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const logIn = async (e) => {
        const userData = {Email: email, Password: password};
        e.preventDefault();
        axios.post('/api/User/LogIn', JSON.stringify(userData), config)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    Navigate("/collections", {state: {userData: response.data}})
                }
            })
            .catch(error => {
                console.log(error);
            });
        setEmail('');
        setPassword('');
    }

    return (
        <div className='w-1/5 text-white text-center'>
            <h1 className='font-extrabold text-4xl mb-10'>Log In</h1>
            <form className='flex flex-col justify-center' action="">
                <input type="text"
                       placeholder='Email'
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       className=' border-2 rounded-xl bg-zinc-900 border-zinc-700 p-2'/><br/>
                <input type="password"
                       placeholder='Password'
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       className='border-2 rounded-xl bg-zinc-900 border-zinc-700 p-2'/><br/>
                <button
                    className='p-2 border-2 border-zinc-700 rounded-xl transition duration-700 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'
                    onClick={e => logIn(e)}>
                    Log In
                </button>
            </form>
            <p className='my-3'>
                Don`t have an account?&thinsp;
                <Link to='/authorize/sign-in'>Sign in</Link>
            </p>
            {/*<Link to={`forgot-password`} className='flex justify-center items-end gap-2'>*/}
            {/*    Forgot password?*/}
            {/*</Link>*/}
        </div>
    );
};

export default LogIn;