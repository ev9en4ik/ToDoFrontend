import React from 'react';
import Header from "./Header/Header";

const Layout = ({children}) => {
    return (
        <div className='bg-zinc-900 w-screen h-screen overflow-y-auto'>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;