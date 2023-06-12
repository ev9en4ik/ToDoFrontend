import React, {useState} from 'react';
import Check from "../../ui/Check/Check";
import Accept from "../../ui/Accept/Accept";
import Close from "../../ui/Close/Close";
import TrashIcon from "../../ui/Trash/TrashIcon";
import axios from "axios";

const SubtaskItem = ({optionsWeekday, subtask, changeMod, removeSubtask, taskId}) => {
    const [record, setRecord] = useState(subtask)
    const [title, setTitle] = useState(record.Name)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const markSubtask = (id) => {
        const subtask = {
            Id: id,
            Name: title,
            IsComplete: !record.IsComplete,
            CreationDate: record.CreationDateNorm,
            ToDoId: taskId
        }
        axios.put('/api/InnerToDo/UpdateInnerToDo', JSON.stringify(subtask), config)
            .then(response => {
                if (response.status === 200) {
                    console.log('success')
                }
            })
            .catch(error => {
                console.log(error);
            });
        setRecord({...record, IsComplete: !record.IsComplete})
    }

    const changeSubtask = (id, e) => {
        const subtask = {
            Id: id,
            Name: title,
            IsComplete: false,
            CreationDate: record.CreationDateNorm,
            ToDoId: taskId
        }
        axios.put('/api/InnerToDo/UpdateInnerToDo', JSON.stringify(subtask), config)
            .then(response => {
                if (response.status === 200) {
                    console.log('success')
                }
            })
            .catch(error => {
                console.log(error);
            });
        setRecord({...record, Name: title});
        e.target.blur();
    }
    return (
        !record.IsComplete &&
        <>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <button className='flex items-center'
                            onClick={() => markSubtask(record.Id)}>
                        <Check width='6' height='6' isCompleted={record.IsComplete}/>
                    </button>
                    {changeMod ?
                        <input type="text"
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                               onKeyDown={e => e.key === 'Enter' && changeSubtask(record.Id, e)}
                               className='bg-transparent w-full border-none outline-none rounded-lg p-1'/>
                        :
                        <div className='flex flex-col items-start gap-0.5 cursor-default'>
                            <span>{record.Name}</span>
                            <span
                                className='text-xs'>
                            {record.CreationDate}
                            </span>
                        </div>
                    }
                </div>
                {changeMod &&
                    <div>
                        {title !== record.Name ?
                            <div className='flex gap-4'>
                                <button onClick={() => changeSubtask(record.Id)}>
                                    <Accept size={20}/>
                                </button>
                                <button onClick={() => setTitle(record.Name)}>
                                    <Close size={20}/>
                                </button>
                            </div>
                            :
                            <button
                                className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                                onClick={() => removeSubtask(record.Id)}>
                                <TrashIcon size={20}/>
                            </button>
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default SubtaskItem;