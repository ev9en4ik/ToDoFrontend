import React, {useEffect, useState} from 'react';
import CollectionItem from "./CollectionItem";
import CreateCollectionField from "./CreateCollectionField";
import axios from "axios";

const Collections = () => {
    const [collections, setCollections] = useState([])
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
                setCollections(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // create collections without backend
    const createCollection = (title, color, icon) => {
        getCollection();
        // setCollections([...collections, {
        //     Id: 111,
        //     Name: title,
        //     ColorType: color,
        //     IconType: icon,
        //     ToDoList: []
        // }]);
    }

    return (
        <div className='flex justify-center text-white mt-40'>
            <div className='flex flex-wrap w-2/5 gap-4'>
                {collections.map(collection => <CollectionItem key={collection.Id}
                                                               collection={collection}/>)
                }
                <CreateCollectionField func={createCollection}/>
            </div>
        </div>
    );
};

export default Collections;