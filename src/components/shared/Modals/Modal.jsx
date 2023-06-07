import React from 'react';
import Create from "./Create";
import Change from "./Change";


const Modal = ({openModal, toggleModal, action, func, collection}) => {
    const config = {
        secure: false,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return (openModal &&
        <div
            className="z-[999] fixed top-0 left-0 w-screen h-screen bg-zinc-900/75 flex justify-center items-center">
            {action === 'add' &&
                <Create toggleModal={toggleModal} func={func} config={config}/>
            }
            {action === 'change' &&
                <Change toggleModal={toggleModal} func={func} collection={collection} config={config}/>
            }
        </div>
    );
};

export default Modal;