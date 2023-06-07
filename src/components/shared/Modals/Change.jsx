import React, {useState} from 'react';
import Close from "../../ui/Close/Close";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";
import axios from "axios";

const Change = ({toggleModal, func, collection, config}) => {
    const [collectionTitle, setCollectionTitle] = useState(collection.Name);
    const [selectedIcon, setSelectedIcon] = useState(collection.IconType);
    const [selectedColor, setSelectedColor] = useState(collection.IconColor);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')));

    const changeCollection = async () => {
        const collectionData = {
            Id: collection.Id,
            Name: collectionTitle,
            UserId: user.Id,
            IconColor: selectedColor,
            IconType: selectedIcon
        }
        await axios.put('/api/ToDoCollection/UpdateCollection', JSON.stringify(collectionData), config)
            .then(response => {
                if (response.status === 200) {
                    console.log('success')
                }
            })
            .catch(error => {
                console.log(error);
            });
        func(collectionTitle, selectedColor, selectedIcon);
        toggleModal();
    }

    const selectColor = (color) => {
        setSelectedColor(color);
    }

    const selectIcon = (icon) => {
        setSelectedIcon(icon);
    }

    return (
        <div className="relative bg-zinc-700 p-4 rounded-xl shadow-xl">
            <button onClick={() => toggleModal()} className='absolute top-2 right-2 '><Close/></button>
            <span
                className='border-slate-500 border-zinc-500 border-red-500 border-orange-500 border-yellow-500 border-green-500 border-teal-500 border-cyan-500 border-blue-500 border-purple-500 border-pink-500 bg-slate-500 bg-zinc-500 bg-red-500 bg-orange-500 bg-yellow-500 bg-green-500 bg-teal-500 bg-cyan-500 bg-blue-500 bg-purple-500 bg-pink-500 hidden'>For loading color</span>
            <div className='m-2 p-2'>
                <h2 className='ml-[-0.5rem] cursor-default'>Title</h2>
                <input type="text"
                       value={collectionTitle}
                       onChange={e => setCollectionTitle(e.target.value)}
                       placeholder='Title'
                       className='bg-transparent w-full border-none outline-none p-2'/>
            </div>
            <div className='m-2 p-2'>
                <h2 className='mb-2 ml-[-0.5rem] cursor-default'>Color</h2>
                <ColorPicker selectedColor={selectedColor}
                             selectColor={selectColor}/>
            </div>
            <div className='m-2 p-2'>
                <h2 className='mb-2 ml-[-0.5rem] cursor-default'>Icon</h2>
                <IconPicker selectedIcon={selectedIcon} selectIcon={selectIcon}
                            selectedColor={selectedColor}/>
            </div>
            <button className='p-2' onClick={() => changeCollection()}>Change collection</button>
        </div>
    );
};

export default Change;