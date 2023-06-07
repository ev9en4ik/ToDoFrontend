import React, {useState} from 'react';
import PlusIcon from "../../ui/Plus/PlusIcon";
import {BsCheck} from "react-icons/bs";

const CreateSubtaskField = ({addSubtask}) => {
    const [title, setTitle] = useState('');

    const newTask = () => {
        addSubtask(title);
        setTitle('');
    }

    return (
        <div
            className='flex justify-between items-center mx-14 border-b-2 border-zinc-600 my-3'>
                <span className='flex items-center w-full'>
                    <button
                        className='border-2 rounded-lg border-pink-300 w-6 h-6 mr-3 items-center justify-center hover:bg-pink-300 transition-colors ease-in-out duration-300'
                        onClick={() => title !== '' && newTask()}>
                        <PlusIcon/>
                    </button>
                    <input type="text"
                           value={title}
                           placeholder='Add a subtask'
                           onChange={e => setTitle(e.target.value)}
                           onKeyDown={e => e.key === 'Enter' && newTask()}
                           className='bg-transparent w-full border-none outline-none p-3'/>
                </span>
            {title !== '' &&
                <BsCheck size='18' className='text-pink-400 transition-colors ease-in-out duration-300'/>}
        </div>
    );
};

export default CreateSubtaskField;