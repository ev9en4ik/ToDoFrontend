import React from 'react';
import TaskItem from "./TaskItem";

const GroupTasks = ({title, tasks, markTask, removeTask, addSubtask}) => {
    return (
        <div className='my-8'>
            {tasks.length !== 0 && <h1 className='text-lg font-bold ml-6 mb-4'>{title}</h1>}
            {
                tasks.map(task => <TaskItem key={task.Id} task={task} markTask={markTask}
                                            removeTask={removeTask}
                                            addSubtask={addSubtask}/>)
            }
        </div>
    );
};

export default GroupTasks;