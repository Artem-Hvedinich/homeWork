import React from 'react'
import Header from './Header'
import Routesing from './Routesing'
import {HashRouter} from "react-router-dom";
import s from "./Style.module.css";

function HW5() {
    return (
        <div className={s.body}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <div className={s.p1}><Routesing/></div>
            </HashRouter>
        </div>
    )
}

export default HW5
