import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import {messageData} from "../../../p2-homeworks/h1/Message";

function PreJunior() {
    return (
        <div>
            <HW1 avatar={messageData[0].avatar} name={messageData[0].name} message={messageData[0].message}
                 time={messageData[0].time}/>
            <HW2/>
            <HW3/>
            <HW4/>
            {/*<HW6/>*/}

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз