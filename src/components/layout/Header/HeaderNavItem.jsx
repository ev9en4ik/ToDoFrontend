import React from 'react';
import {Link} from "react-router-dom";

const HeaderNavItem = ({linkTo, title}) => {
    return (
        <div>
            <Link to={linkTo}>{title}</Link>
        </div>
    );
};

export default HeaderNavItem;