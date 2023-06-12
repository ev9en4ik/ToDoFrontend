import React, {useEffect, useState} from 'react';
import DashboardItem from "./DashboardItem";
import Change from "../../ui/Change/Change";
import axios from "axios";

const Dashboard = () => {
    const [changeMod, setChangeMod] = useState(false);
    const [collections, setCollections] = useState([]);
    const [overview, setOverview] = useState('General');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')));
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    useEffect(() => {
        getCollection();
    }, [])

    const getCollection = () => {
        axios.get('/api/ToDoCollection/UserCollections', {params: {id: user.Id}}, config)
            .then(response => {
                console.log(response.data)
                setCollections(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const toggleChangeMod = (e) => {
        e.currentTarget.classList.toggle('bg-gray-600');
        setChangeMod(!changeMod);
    }

    const removeCollection = (collection) => {
        axios.delete('/api/ToDoCollection/DeleteById', {params: {id: collection.Id}})
            .then(response => {
                if (response.status === 200) {
                    console.log('success');
                }
            })
            .catch(error => {
                console.log(error);
            });
        setCollections(collections.filter(e => e.Id !== collection.Id));
    }
    const setOverviews = () => {
        if (overview === 'General')
            setOverview('Daily')
        else
            setOverview('General')
    }

    const renderCollection = (collection) => {

        if (overview === 'Daily') {
            let task = [];
            task = collection.ToDoList.filter(todo => {
                const date = new Date(todo.CreationDateNorm)

                if (date.getDate() === new Date().getDate() &&
                    date.getMonth() === new Date().getMonth() &&
                    date.getFullYear() === new Date().getFullYear()) return todo


            })
            if (task.length !== 0) return <DashboardItem key={collection.Id}
                                                         collection={collection}
                                                         removeCollection={removeCollection}
                                                         changeMod={changeMod}
                                                         overview={overview}
                                                         getCollection={getCollection}/>
        } else return <DashboardItem key={collection.Id}
                                     collection={collection}
                                     removeCollection={removeCollection}
                                     changeMod={changeMod}
                                     overview={overview}
                                     getCollection={getCollection}/>
    }

    return (
        <div className='flex flex-col items-center text-white'>
            <div className='w-2/5 px-10'>
                <div className='mt-6 mb-16'>
                    <h2 className='text-2xl font-bold text-gray-400'>Dashboard</h2>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <button
                        className='font-medium text-sm border-2 rounded-xl border-gray-700 p-2 w-36'
                        onClick={() => setOverviews()}>
                        {overview} overview
                    </button>
                    <div className='font-medium text-sm border-2 rounded-xl border-gray-700 p-1.5'
                         onClick={e => toggleChangeMod(e)}>
                        <Change/>
                    </div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    {
                        collections.map(collection => collection.ToDoList.length !== 0 && renderCollection(collection))
                        // collections.map(collection => collection.ToDoList.length !== 0 &&
                        // <DashboardItem key={collection.Id}
                        //                collection={collection}
                        //                removeCollection={removeCollection}
                        //                changeMod={changeMod}
                        //                overview={overview}
                        //                getCollection={getCollection}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;