import React from 'react'
import s from "./Message.module.css"

export type messagePropsType = {
    avatar: any,
    name: string,
    message: string,
    time: string,
}

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
