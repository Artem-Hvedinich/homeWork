import React from 'react'
import Message from "./Message";

export type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}



const HW1 = (props: messagePropsType) => {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={props.avatar}
                name={props.name}
                message={props.message}
                time={props.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
