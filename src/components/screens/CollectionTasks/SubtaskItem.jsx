import React from 'react';
import Check from "../../ui/Check/Check";
import TrashIcon from "../../ui/Trash/TrashIcon";

const SubtaskItem = ({subtask, markSubtask, removeSubtask, optionsWeekday}) => {
    return (
        <div
            className='flex justify-between items-center my-3 rounded-2xl px-14 w-full'>
            <button className='flex items-center'
                    onClick={() => markSubtask(subtask.Id)}>
                <Check width='6' height='6' isCompleted={subtask.IsComplete}/>
                <div className='flex flex-col items-start gap-0.5'>
                    <span className={subtask.IsComplete ? 'line-through' : ''}>{subtask.Name}</span>

                    <span
                        className='text-xs'>
                            {subtask.CreationDate}</span>
                </div>
            </button>
            <button className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                    onClick={() => removeSubtask(subtask.Id)}>
                <TrashIcon/>
            </button>
        </div>
    );
};

export default SubtaskItem;