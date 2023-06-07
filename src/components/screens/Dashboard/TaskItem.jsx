import React, {useEffect, useState} from 'react';
import Check from "../../ui/Check/Check";
import ArrowDown from "../../ui/ArrowDown/ArrowDown";
import Accept from "../../ui/Accept/Accept";
import Close from "../../ui/Close/Close";
import TrashIcon from "../../ui/Trash/TrashIcon";
import axios from "axios";
import SubtaskItem from "./SubtaskItem";

const TaskItem = ({task, changeMod, removeTask}) => {
    const [record, setRecord] = useState(task)
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState(record.Name)
    const optionsWeekday = {weekday: 'long'}
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        setTitle(record.Name);
    }, [changeMod, record.Name])
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    const markTask = () => {
        const task = {
            Id: record.Id,
            Name: record.Name,
            IsComplete: !record.IsComplete,
            About: record.About,
            CreationDate: record.CreationDate,
            InnerToDoList: record.InnerToDoList,
            CollectionId: record.CollectionId

        }
        axios.put('/api/ToDo/UpdateToDo', JSON.stringify(task), config)
            .then(response => {
                if (response.status === 200) {
                    console.log('success')
                }
            })
            .catch(error => {
                console.log(error);
            });
        setRecord({...record, IsComplete: !record.IsComplete});
    }

    const changeTask = (id, e) => {
        const task = {
            Id: record.Id,
            Name: title,
            IsComplete: record.IsComplete,
            About: record.About,
            CreationDate: record.CreationDate,
            InnerToDoList: record.InnerToDoList,
            CollectionId: record.CollectionId
        }
        axios.put('/api/ToDo/UpdateToDo', JSON.stringify(task), config)
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

    const removeSubtask = (id) => {
        console.log(id)
        axios.delete('https://192.168.0.103:7000/api/InnerToDo/DeleteById', {params: {id: id}})
            .then(response => {
                if (response.status === 200) {
                    console.log('success');
                }
            })
            .catch(error => {
                console.log(error)
            });
        setRecord({...record, InnerToDoList: record.InnerToDoList.filter(t => t.Id !== id)});
    }

    return (
        !record.IsComplete &&
        <>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <button className='flex items-center'
                            onClick={() => markTask(record.Id)}>
                        <Check width='6' height='6' isCompleted={record.IsComplete}/>
                    </button>
                    {changeMod ?
                        <input type="text"
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                               onKeyDown={e => e.key === 'Enter' && changeTask(record.Id, e)}
                               className='bg-transparent w-full border-none outline-none rounded-lg p-1'/>
                        :
                        <div className='flex flex-col items-start gap-0.5 cursor-default'>
                            <span>{record.Name}</span>
                            <span className='text-xs'>
                            {record.CreationDate}
                            </span>
                        </div>
                    }
                </div>
                <div className='flex items-center gap-3'>
                    {record.InnerToDoList.length !== 0 &&
                        <button
                            className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            onClick={() => toggleExpanded()}>
                            <ArrowDown/>
                        </button>
                    }
                    {changeMod &&
                        <div className='flex items-center justify-end w-12'>
                            {title !== record.Name ?
                                <div className='flex gap-1.5'>
                                    <button onClick={e => changeTask(record.Id, e)}>
                                        <Accept size={20}/>
                                    </button>
                                    <button onClick={() => setTitle(record.Name)}>
                                        <Close size={20}/>
                                    </button>
                                </div>
                                :
                                <button
                                    className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                                    onClick={() => removeTask(record.Id)}>
                                    <TrashIcon size={20}/>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
            {isExpanded && <div className="flex flex-col gap-3 pl-10 pr-6">
                {record.InnerToDoList.map(subtask => !subtask.IsComplete && <SubtaskItem key={subtask.Id}
                                                                                         optionsWeekday={optionsWeekday}
                                                                                         taskId={record.Id}
                                                                                         subtask={subtask}
                                                                                         changeMod={changeMod}
                                                                                         removeSubtask={removeSubtask}/>)
                }
            </div>
            }
        </>
    );
};

export default TaskItem;