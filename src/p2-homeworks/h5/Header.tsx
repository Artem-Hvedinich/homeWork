import React from 'react'
import {NavLink} from "react-router-dom";
import * as PATH from "path";

function Header() {

    const setActive=({isActive}:any) => isActive ? 'active' : ''

    return (
        <nav>
            <NavLink to={'/pre-junior'} className={setActive}>Prev-Junior </NavLink>
            <NavLink to={'/junior'} className={setActive}>Junior </NavLink>
            <NavLink to={'/junior-plus'} className={setActive}>Junior-Plus </NavLink>

        </nav>
    )
}

export default Header
