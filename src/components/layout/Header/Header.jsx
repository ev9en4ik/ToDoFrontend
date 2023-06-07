import React, {useState} from 'react';
import Dashboard from "../../ui/Dashboard/DashboardIcon";
import Collections from "../../ui/Collections/CollectionsIcon";
import HeaderNavItem from "./HeaderNavItem";
import UserIcon from "../../ui/User/UserIcon";
import {Link} from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import UserHover from "./UserHover";

const Header = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className='flex items-center justify-center h-12 bg-zinc-800 mb-10 text-gray-400'>
            <div className='flex justify-around items-center w-4/5 px-10'>
                <div>
                    <Link to={`/`}
                          className='flex items-center gap-4 text-xl hover:text-pink-300 transition-colors  ease-in-out duration-300'>
                        <Logo/> Tasskss
                    </Link>
                </div>
                <nav className='flex items-center gap-4'>
                    <div
                        className='flex items-center gap-2 hover:text-pink-300 transition-colors  ease-in-out duration-300'>
                        <Dashboard/>
                        <HeaderNavItem title='Dashboard' linkTo='/dashboard'/>
                    </div>
                    <div
                        className='flex items-center gap-2 hover:text-pink-300 transition-colors  ease-in-out duration-300'>
                        <Collections/>
                        <HeaderNavItem title='Collections' linkTo='/collections'/>
                    </div>
                    <div
                        className='relative flex items-center hover:text-pink-300 transition-colors  ease-in-out duration-300'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <UserIcon/>
                        <UserHover isHovering={isHovering}/>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;