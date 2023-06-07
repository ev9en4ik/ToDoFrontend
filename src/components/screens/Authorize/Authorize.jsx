import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../ui/Logo/Logo";

const Authorize = ({children}) => {
    return (
        <div className={'bg-zinc-900 w-screen h-screen flex flex-col justify-evenly items-center'}>
            <Link to={`/`} className='flex items-center gap-4 text-xl text-white'>
                <Logo/> Tasskss
            </Link>
            {children}
        </div>
    );
};

export default Authorize;