import React from 'react'
import s from './App.module.css'
import HW1 from "../../../p2-homeworks/h1/HW1";

export type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function App() {

    const messageData: Array<messagePropsType> = [
        {
            avatar: 'https://cdn4.iconfinder.com/data/icons/hacker-1/500/hacker-hack-crime-cyber_2-512.png',
            name: 'Artem Hved',
            message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, dis dapibus primis augue cursus dui, ',
            time: '22:00',
        }
    ]

    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            <HW1 avatar={messageData[0].avatar} name={messageData[0].name} message={messageData[0].message}
                 time={messageData[0].time}/>
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            {/*<HW5/>*/}

        </div>
    )
}

export default App
