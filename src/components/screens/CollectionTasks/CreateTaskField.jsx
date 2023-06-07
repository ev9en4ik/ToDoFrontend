import React, {useState} from 'react';
import {BsCheck} from 'react-icons/bs';
import PlusIcon from "../../ui/Plus/PlusIcon";

const CreateTaskField = ({addTask}) => {
    const [title, setTitle] = useState('');

    const newTask = () => {
        addTask(title);
        setTitle('');
    }

    return (
        <div
            className='flex justify-between items-center mb-3 rounded-2xl bg-zinc-900 border-2 px-3 border-zinc-600 my-8'>
            <span className='flex items-center w-full'>
                <button
                    className='border-2 rounded-lg border-pink-300 w-5 h-5 mr-3 items-center justify-center hover:bg-pink-300 transition-colors ease-in-out duration-300'
                    onClick={() => title !== '' && newTask()}>
                    <PlusIcon/>
                </button>
                <input type="text"
                       value={title}
                       placeholder='Add a task'
                       onChange={e => setTitle(e.target.value)}
                       onKeyDown={e => e.key === 'Enter' && newTask()}
                       className='bg-transparent w-full border-none outline-none p-3'/>
            </span>
            {title !== '' && <BsCheck size='18' className='text-green-400 transition-colors ease-in-out duration-300'/>}
        </div>
    );
};

export default CreateTaskField;