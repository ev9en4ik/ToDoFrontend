import React from 'react';
import {BsCircle} from "react-icons/bs";
import {Link} from "react-router-dom";
import {icons} from "../../../data/iconList";

const CollectionItem = ({collection}) => {

    const calculateDoneTasks = () => {
        const completedTask = collection.ToDoList.filter(elem => elem.IsComplete === true);
        if (collection.ToDoList.length === 0) {
            return 'task list is empty';
        } else if (collection.ToDoList.length === completedTask.length) {
            return 'all task completed';
        } else {
            return `${completedTask.length}/${collection.ToDoList.length} completed`;
        }
    }

    return (
        <Link to={`/collection/${collection.Id}`}>
            <div className='flex flex-col justify-between w-40 h-40 rounded-2xl bg-zinc-800 p-4'>
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-${collection.IconColor}-500`}>
                    {icons[collection.IconType]}
                </div>
                <div className='flex justify-between items-end self-end font-semibold w-full'>
                <span>{collection.Name}
                    <br/>
                    <span className='text-xs text-gray-400'>{calculateDoneTasks()}</span>
                </span>
                    <BsCircle/>
                </div>
            </div>
        </Link>
    );
};

export default CollectionItem;