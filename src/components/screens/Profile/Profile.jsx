import React, {useState} from 'react';
import UserIcon from "../../ui/User/UserIcon";
import PersonalData from "./PersonalData";
import Password from "./Password";

const Profile = () => {
    const [toggleView, setToggleView] = useState('Change personal data');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')));
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const changeUserData = () => {
        setUser(JSON.parse(localStorage.getItem('userData')));
    }

    const toggle = () => {
        if (toggleView === 'Change personal data') {
            setToggleView('Change password');
        } else {
            setToggleView('Change personal data');
        }
    }

    return (
        <div className='flex justify-center text-gray-300'>
            <div className='flex flex-col w-2/5 gap-6'>
                <h1 className='text-4xl'>Profile</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='rounded-3xl mr-4'>
                            <UserIcon size={50}/>
                        </div>
                        <span>{user.Login}</span>
                    </div>
                    <button
                        className='w-44 p-1 border-2 border-gray-600 rounded-lg transition duration-300 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'
                        onClick={() => toggle()}>
                        {toggleView}
                    </button>
                </div>
                <div className='bg-zinc-800 rounded-lg p-4'>
                    {
                        toggleView === 'Change personal data' ?
                            <PersonalData user={user} config={config} changeUserData={changeUserData}/>
                            :
                            <Password user={user} config={config} changeUserData={changeUserData}/>
                    }

                </div>
            </div>
        </div>
    );
};

export default Profile;
