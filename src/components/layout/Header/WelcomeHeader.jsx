import React from 'react';
import Logo from "../../ui/Logo/Logo";
import {Link} from "react-router-dom";

const WelcomeHeader = () => {
    return (
        <div className='flex items-center justify-center h-12 bg-zinc-800 mb-10 text-gray-400'>
            <div className='flex justify-between items-center w-screen max-w-6xl px-10'>
                <div>
                    <Link to={`/`} className='flex items-center gap-4 text-xl'>
                        <Logo/> Tasskss
                    </Link>
                </div>
                <nav className='flex items-center gap-4'>
                    <Link
                        to={`/authorize/log-in`}
                        className='m-2 py-1 px-4 text-white border-2 border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors ease-in-out duration-300'>
                        Log in
                    </Link>
                    <Link
                        to={`/authorize/sign-in`}
                        className='m-2 py-1 px-4 text-white border-2 border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors ease-in-out duration-300'>
                        Sign in
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default WelcomeHeader;