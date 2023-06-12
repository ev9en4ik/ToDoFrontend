import React, {useState} from 'react';
import Change from "../../ui/Change/Change";
import axios from "axios";

const PersonalData = ({user, config, changeUserData}) => {
    const [changeMod, setChangeMod] = useState(false)

    const [login, setLogin] = useState(user.Login);
    const [email, setEmail] = useState(user.Email);
    const toggleChangeMod = (e) => {
        e.currentTarget.classList.toggle('bg-gray-600');
        setChangeMod(!changeMod);
    }

    const setData = async () => {
        const userData = {
            Id: user.Id,
            Login: login,
            Email: email,
            Password: user.Password
        }
        await axios.put('/api/User/UpdateUser', JSON.stringify(userData), config)
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
        alert('Data was changed');

    }

    return (
        <div className='flex flex-col gap-2 relative'>
            <div className='flex flex-col'>
                <span className='text-sm'>Name:</span>
                {changeMod ?
                    <input type="text"
                           value={login}
                           onChange={e => setLogin(e.target.value)}
                           className='bg-transparent outline-none p-1 rounded-lg border-2 border-zinc-900 w-2/5'/>
                    :
                    <span className='p-1.5 cursor-default'>{login}</span>
                }
            </div>
            <div className='flex flex-col'>
                <span className='text-sm'>Email:</span>
                {changeMod ?
                    <input type="text"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           className='bg-transparent outline-none p-1 rounded-lg border-2 border-zinc-900 w-2/5'/>
                    :
                    <span className='p-1.5 cursor-default'>{email}</span>
                }
            </div>
            {changeMod &&
                <button
                    className='absolute w-44 bottom-0 right-0 p-1 border-2 border-gray-600 rounded-lg transition duration-300 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'
                    onClick={() => setData()}>
                    Edit
                </button>
            }
            <div className='absolute top-0 right-0 font-medium text-sm border-2 rounded-xl border-gray-700 p-1.5'
                 onClick={e => toggleChangeMod(e)}>
                <Change/>
            </div>
        </div>
    );
};

export default PersonalData;