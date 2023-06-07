import React, {useState} from 'react';
import axios from "axios";

const Password = ({user, config, changeUserData}) => {
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const setData = async () => {
        if (oldPassword === user.Password && password === confirmPassword) {
            const userData = {
                Id: user.Id,
                Login: user.Login,
                Email: user.Email,
                Password: password
            }
            await axios.put('https://192.168.0.103:7000/api/User/UpdateUser', JSON.stringify(userData), config)
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem('userData', JSON.stringify(userData));
                        console.log('success')
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            changeUserData();
            alert('Password was changed');
        } else if (oldPassword !== user.Password) {
            alert('Password is incorrect!');
        } else if (password !== confirmPassword) {
            alert('Password and confirm password are different');
        }
        setOldPassword('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className='flex flex-col gap-2 relative'>
            <div className='flex flex-col'>
                <span className='text-sm mb-1'>Current password:</span>
                <input type="password"
                       value={oldPassword}
                       onChange={e => setOldPassword(e.target.value)}
                       className='bg-transparent outline-none p-1 rounded-lg border-2 border-zinc-900 w-2/5'/>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm mb-1'>New password:</span>
                <input type="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                       className='bg-transparent outline-none p-1 rounded-lg border-2 border-zinc-900 w-2/5'/>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm mb-1'>Confirm new password:</span>
                <input type="password"
                       value={confirmPassword}
                       onChange={e => setConfirmPassword(e.target.value)}
                       className='bg-transparent outline-none p-1 rounded-lg border-2 border-zinc-900 w-2/5'/>
            </div>
            <button
                className='absolute w-44 p-1 border-2 border-gray-600 rounded-lg bottom-0 right-0 transition duration-300 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'
                onClick={() => setData()}>
                Edit
            </button>
        </div>
    );
};

export default Password;