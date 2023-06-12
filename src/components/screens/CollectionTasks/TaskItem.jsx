import React, {useEffect, useState} from 'react';
import Check from "../../ui/Check/Check";
import TrashIcon from "../../ui/Trash/TrashIcon";
import ArrowDown from "../../ui/ArrowDown/ArrowDown";
import CreateSubtaskField from "./CreateSubtaskField";
import SubtaskItem from "./SubtaskItem";
import axios from "axios";

const TaskItem = ({task, markTask, removeTask, addSubtask}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [subtasks, setSubtasks] = useState([])
    const optionsWeekday = {weekday: 'long'};
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const createSubtask = (title) => {
        addSubtask(title, task.Id);
    }
    const markSubtask = (id) => {
        const copy = [...subtasks];
        const current = copy.find(e => e.Id === id);
        current.IsComplete = !current.IsComplete;
        setSubtasks(copy);
        const subtask = {
            Id: id,
            Name: current.Name,
            IsComplete: current.IsComplete,
            CreationDate: current.CreationDateNorm,
            ToDoId: task.Id
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
    }
    useEffect(() => {
        setSubtasks(task.InnerToDoList)
    }, [task.InnerToDoList])
    const removeSubtask = (id) => {
        axios.delete('/api/InnerToDo/DeleteById', {params: {id: id}})
            .then(response => {
                if (response.status === 200) {
                    console.log('success');
                }
            })
            .catch(error => {
                console.log(error);
            });
        setSubtasks(subtasks.filter(t => t.Id !== id));
    }

    return (
        <div
            className='mb-3 rounded-2xl bg-zinc-800  w-full'>
            <div className='flex p-3 justify-between gap-4 items-center'>
                <button className='flex items-center'
                        onClick={() => markTask(task.Id)}>
                    <Check width='6' height='6' isCompleted={task.IsComplete}/>

                </button>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className='flex justify-between items-center w-full'>
                    <div className='flex flex-col items-start gap-0.5'>
                        <span className={task.IsComplete ? 'line-through' : ''}>{task.Name}</span>
                        <span
                            className='text-xs'>
                            {task.CreationDate}
                            {/*{new Intl.DateTimeFormat('en-US', optionsWeekday).format(task.CreationDate)}&nbsp;&nbsp;*/}
                            {/*{task.datetime.getDate()}.{task.CreationDate.getMonth() + 1}*/}

                        </span>
                    </div>
                    <ArrowDown/>

                </button>
                <button className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                        onClick={() => removeTask(task.Id)}>
                    <TrashIcon/>
                </button>
            </div>
            {isExpanded &&
                <div className="flex flex-col bg-neutral-800 rounded-2xl">
                    <CreateSubtaskField addSubtask={createSubtask}/>
                    {subtasks.map(subtask => !subtask.IsComplete && <SubtaskItem key={subtask.Id}
                                                                                 subtask={subtask}
                                                                                 markSubtask={markSubtask}
                                                                                 removeSubtask={removeSubtask}
                                                                                 optionsWeekday={optionsWeekday}/>)
                    }
                    {subtasks.map(subtask => subtask.IsComplete && <SubtaskItem key={subtask.Id}
                                                                                subtask={subtask}
                                                                                markSubtask={markSubtask}
                                                                                removeSubtask={removeSubtask}
                                                                                optionsWeekday={optionsWeekday}/>)
                    }
                </div>
            }
        </div>
    );
};

export default TaskItem;