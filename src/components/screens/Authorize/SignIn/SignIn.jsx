import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Navigate = useNavigate();
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const signIn = (e) => {
        const userData = {Id: 0, Login: login, Email: email, Password: password};
        e.preventDefault();
        console.log();
        axios.post('https://192.168.0.103:7000/api/User/SignUp', JSON.stringify(userData), config)
            .then(response => {
                if (response.status === 200) {
                    console.log("success");
                    Navigate("/authorize/log-in");
                }
            })
            .catch(error => {
                console.log(error);
            });

        setLogin('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className='w-1/5 text-white text-center'>
            <h1 className='font-extrabold text-4xl mb-10'>Sign In</h1>
            <form className='flex flex-col justify-center' action="">
                <input type="text"
                       placeholder='Login'
                       value={login}
                       onChange={e => setLogin(e.target.value)}
                       className=' border-2 rounded-xl bg-zinc-900 border-zinc-700 p-2'/><br/>
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
                <input type="password"
                       placeholder='Confirm Password'
                       value={confirmPassword}
                       onChange={e => setConfirmPassword(e.target.value)}
                       className='border-2 rounded-xl bg-zinc-900 border-zinc-700 p-2'/><br/>
                <button
                    className='p-2 border-2 border-zinc-700 rounded-xl transition duration-700 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'
                    onClick={e => signIn(e)}>
                    Sign In
                </button>
            </form>
            <p className='my-3'>
                Already have an account?&thinsp;
                <Link to='/authorize/log-in'>Log in</Link>
            </p>
        </div>
    );
};

export default SignIn;