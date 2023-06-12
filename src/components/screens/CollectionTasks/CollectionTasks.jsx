import React, {useEffect, useState} from 'react';
import GroupTasks from "./GroupTasks";
import CreateTaskField from "./CreateTaskField";
import {useParams} from "react-router-dom";
import axios from "axios";

const CollectionTasks = () => {
    let {id} = useParams();
    const [tasks, setTasks] = useState([]);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = () => {
        axios.get('/api/ToDoCollection/GetCollectionById', {params: {id: id}}, config)
            .then(response => {
                setTasks(response.data.ToDoList);
                console.log(response.data.ToDoList)
            })
            .catch(error => {
                console.log(error);
            });
    }
    const markTask = (id) => {
        const copy = [...tasks];
        const current = copy.find(t => t.Id === id);
        current.IsComplete = !current.IsComplete;
        setTasks(copy);
        console.log(current)
        const task = {
            Id: current.Id,
            Name: current.Name,
            IsComplete: current.IsComplete,
            About: current.About,
            CreationDate: current.CreationDateNorm,
            InnerToDoList: current.InnerToDoList,
            CollectionId: current.CollectionId

        }
        axios.put('https://192.168.0.101:7000/api/ToDo/UpdateToDo', JSON.stringify(task), config)
            .then(response => {
                if (response.status === 200) {
                    console.log('success')
                }
            })
            .catch(error => {
                console.log(error);
            });
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

        setTasks([...tasks].filter(t => t.Id !== id));
    }

    const addTask = async (title) => {
        const task = {
            Id: 0,
            Name: title,
            IsComplete: false,
            About: "-",
            CreationDate: new Date().toISOString(),
            CollectionId: id
        }
        await axios.post('/api/ToDo/AddToDo', JSON.stringify(task), config)
            .then(response => {
                if (response.status === 200) {
                    console.log("success");
                }
            })
            .catch(error => {
                console.log(error);
            });
        getTasks();
    }
    const addSubtask = async (title, id) => {
        const subtask = {
            Id: 0,
            Name: title,
            IsComplete: false,
            CreationDate: new Date().toISOString(),
            ToDoId: id
        }
        await axios.post('/api/InnerToDo/AddInnerToDo', JSON.stringify(subtask), config)
            .then(response => {
                if (response.status === 200) {
                    console.log("success");
                    getTasks();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className='flex justify-center text-gray-400'>
            <div className='w-2/5 gap-4'>
                <CreateTaskField addTask={addTask}/>
                {tasks.length !== 0 ?
                    <div>
                        <GroupTasks title='Tasks' tasks={tasks.filter(task => task.IsComplete === false)}
                                    markTask={markTask}
                                    removeTask={removeTask}
                                    addSubtask={addSubtask}/>
                        <GroupTasks title='Completed' tasks={tasks.filter(task => task.IsComplete === true)}
                                    markTask={markTask}
                                    removeTask={removeTask}
                                    addSubtask={addSubtask}/>
                    </div>
                    :
                    <span className='fixed top-[50vh]'>Task list is empty</span>
                }
            </div>
        </div>
    );
};

export default CollectionTasks;