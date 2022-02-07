import React from 'react'
import Header from './Header'
import Routesing from './Routesing'
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Routesing/>
            </HashRouter>
        </div>
    )
}

export default HW5
