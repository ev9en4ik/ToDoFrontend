import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='flex justify-center w-screen h-screen bg-zinc-900'>
            <div className='flex flex-col justify-center items-center font-semibold gap-10 text-center text-gray-400'>
                <h1 className='text-5xl'>404 - Looks like you're lost</h1>

                <p>Maybe this page used to exist or you just spelled something wrong.<br/>
                    Chances are you spelled something wrong, so can you double click the URL?</p>

                <Link to={'/'}
                      className='w-40 text-white font-normal text-xl p-1 border-2 border-gray-600 rounded-lg transition duration-300 bg-gradient-to-r from-slate-600 to-blue-500 hover:scale-110'>
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;