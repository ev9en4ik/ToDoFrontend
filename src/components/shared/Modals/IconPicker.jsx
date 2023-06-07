import React from 'react';
import {icons} from "../../../data/iconList";

const IconPicker = ({selectedIcon, selectIcon, selectedColor}) => {

    const setClassName = (elem) => {
        if (selectedIcon === elem) {
            return `bg-${selectedColor}-500 rounded-3xl transition-700 transition-colors easy-in-out`
        }
    }

    return (
        <div className='flex items-center ml-[-0.5rem]'>
            {
                Object.keys(icons).map((elem, i) =>
                    <div key={i}
                         className={`flex items-center justify-center w-8 h-8 cursor-pointer ${setClassName(elem)}`}
                         onClick={() => selectIcon(elem)}>
                        {icons[elem]}
                    </div>
                )
            }
        </div>
    );
};

export default IconPicker;