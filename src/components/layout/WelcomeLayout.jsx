import React from 'react';
import WelcomeHeader from "./Header/WelcomeHeader";

const WelcomeLayout = ({children}) => {
    return (
        <div className='bg-zinc-900 w-screen h-screen'>
            <WelcomeHeader/>
            {children}
        </div>
    );
};

export default WelcomeLayout;