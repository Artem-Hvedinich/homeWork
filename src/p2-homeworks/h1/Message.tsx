import React from 'react'
import s from "./Message.module.css"

export type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export const messageData: Array<messagePropsType> = [
    {
        avatar: 'https://cdn4.iconfinder.com/data/icons/hacker-1/500/hacker-hack-crime-cyber_2-512.png',
        name: 'Artem Hved',
        message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, dis dapibus primis augue cursus dui, ',
        time: '22:00',
    }
]

const Message = (props: messagePropsType) => {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.img}/>
            <div className={s.bodyMessage}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
