import React, {useState} from 'react';
import ArrowDown from "../../ui/ArrowDown/ArrowDown";
import RightArrow from "../../ui/RightArrow/RightArrow";
import {Link} from "react-router-dom";
import {icons} from "../../../data/iconList";
import Change from "../../ui/Change/Change";
import TrashIcon from "../../ui/Trash/TrashIcon";
import Modal from "../../shared/Modals/Modal";
import TaskItem from "./TaskItem";
import axios from "axios";

const DashboardItem = ({collection, changeMod, removeCollection, overview, getCollection}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [record, setRecord] = useState(collection);
    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    const removeTask = (id) => {
        axios.delete('/api/ToDo/DeleteById', {params: {id: id}})
            .then(response => {
                if (response.status === 200) {
                    console.log('success');
                }
            })
            .catch(error => {
                console.log(error);
            });

        setRecord({...record, ToDoList: record.ToDoList.filter(t => t.Id !== id)});
    }

    const changeCollection = (title, color, icon) => {
        setRecord({...record, Name: title, IconColor: color, IconType: icon});
    }

    const getTaskItem = (task, overview) => {
        const date = new Date()
        if (overview === 'Daily') {
            if (task.datetime.getDate() === date.getDate() &&
                task.datetime.getMonth() === date.getMonth() &&
                task.datetime.getFullYear() === date.getFullYear())
                return <TaskItem key={task.Id}
                                 task={task}
                                 changeMod={changeMod}
                                 removeTask={removeTask}/>
        } else
            return <TaskItem key={task.Id}
                             task={task}
                             changeMod={changeMod}
                             removeTask={removeTask}/>
    }

    // const markTask = (id) => {
    //     setRecord({
    //         ...record, tasks: record.tasks.map(task => {
    //             if (task.id === id) {
    //                 return {...task, isCompleted: !task.isCompleted};
    //             }
    //             return task;
    //         })
    //     });
    // }
    //
    // const changeTask = (id, title) => {
    //     console.log(title)
    //     setRecord({
    //         ...record, tasks: record.tasks.map(task => {
    //             if (task.id === id) {
    //                 return {...task, title: title};
    //             }
    //             return task;
    //         })
    //     });
    // }

    return (
        <div
            className='rounded-2xl bg-zinc-800 w-full'>
            <div className='flex justify-between items-center gap-3 p-3'>
                <button
                    className="flex justify-between items-center w-full bg-zinc-800"
                    onClick={() => toggleExpanded()}>
                    <div className={`flex items-center justify-center w-6 h-6 rounded-lg bg-${record.ColorType}-500`}>
                        {icons[record.IconType]}
                    </div>
                    <span className="font-semibold">{record.Name}</span>
                    <div className={`transform transition-transform ${
                        isExpanded ? 'rotate-180' : ''}`}
                    >
                        <ArrowDown/>
                    </div>
                </button>
                {changeMod &&
                    <div className='flex gap-1.5 w-12'>
                        <button
                            className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                            onClick={() => toggleModal()}>
                            <Change size={20}/>
                        </button>
                        <button
                            className='flex items-center hover:text-white transition-colors duration-300 ease-in-out'
                            onClick={() => removeCollection(record)}>
                            <TrashIcon size={20}/>
                        </button>
                        <Modal
                            openModal={openModal}
                            toggleModal={toggleModal}
                            action={'change'}
                            func={changeCollection}
                            collection={record}
                        />
                    </div>
                }
            </div>
            {isExpanded && <div>
                <main className='flex flex-col gap-3 p-3'>
                    {/*{record.ToDoList.map(task => getTaskItem(task, overview))}*/}
                    {record.ToDoList.map(task => <TaskItem key={task.Id}
                                                           task={task}
                                                           changeMod={changeMod}
                                                           removeTask={removeTask}/>)}

                </main>
                <footer
                    className='flex justify-center items-center rounded-b-2xl bg-neutral-800 border-zinc-500 border-t-2 p-2'>
                    <Link to={`/collection/${collection.Id}`} className='flex justify-center items-end gap-2'>
                        Go to collection
                        <RightArrow/>
                    </Link>
                </footer>
            </div>
            }
        </div>
    );
};

export default DashboardItem;