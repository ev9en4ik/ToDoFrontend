import React from 'react';
import {BsPersonCircle} from "react-icons/bs";

const UserIcon = ({size}) => {
    return (
        <div>
            <BsPersonCircle size={size | 18}/>
        </div>
    );
};

export default UserIcon;