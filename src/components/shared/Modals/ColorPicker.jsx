import React from 'react';
import {colors} from "../../../data/colorList";

const ColorPicker = ({selectedColor, selectColor}) => {

    const setClassName = (color) => {

        if (selectedColor === color) {
            return `border-2 border-${color}-500 rounded-2xl p-[0.1rem]`
        }
    }

    return (
        <div className='flex items-center gap-[0.3rem]'>
            {
                colors.map((color, i) =>
                    <div key={i}
                         className={`cursor-pointer ${setClassName(color)}`}
                         onClick={() => selectColor(color)}>
                        <div className={`bg-${color}-500 w-[1.2rem] h-[1.2rem] rounded-xl`}></div>
                    </div>
                )
            }
        </div>
    );
};

export default ColorPicker;