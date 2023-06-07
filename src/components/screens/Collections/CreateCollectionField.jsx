import React, {useState} from 'react';
import PlusIcon from "../../ui/Plus/PlusIcon";
import Modal from "../../shared/Modals/Modal";

const CreateCollectionField = ({func}) => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    }


    return (
        <div>
            <button
                className='flex justify-center items-center border-2 rounded-2xl bg-zinc-900 border-gray-400 text-gray-400 w-40 h-20 hover:bg-zinc-800 hover:border-gray-300 hover:text-gray-200 transition-colors ease-in-out duration-300'
                onClick={() => toggleModal()}>
                <PlusIcon/>
            </button>
            <Modal openModal={openModal}
                   toggleModal={toggleModal}
                   action='add'
                   func={func}/>
        </div>
    );
}

export default CreateCollectionField;