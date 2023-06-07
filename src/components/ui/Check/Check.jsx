import React from 'react';
import {BsCheck} from "react-icons/bs";

const Check = ({isCompleted, width = 5, height = 5}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-300 text w-${width} h-${height} mr-3 items-center justify-center 
             ${isCompleted ? 'bg-pink-300 ' : ''}`}>
            {
                isCompleted &&
                <BsCheck size='100%' className='text-zinc-900'/>
            }
        </div>
    );
};

export default Check;