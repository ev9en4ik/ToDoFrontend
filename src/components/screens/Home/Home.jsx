import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='flex justify-center items-center h-2/3'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-300 mb-8'>Tasskss app, just tasks</h1>
                <p className='text-base text-gray-400 mb-8'>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing
                    elit. Eaque, soluta.</p>
                <div>
                    <Link to={`/authorize/log-in`}
                          className='m-2 p-2 text-white border-2 border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors ease-in-out duration-300'>
                        Get started
                    </Link>

                    <Link to={`about-us`}
                          className='m-2 p-2 text-white border-2 border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors ease-in-out duration-300'>
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;