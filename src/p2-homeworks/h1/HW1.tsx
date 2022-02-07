import React from 'react'
import Message from "./Message";

export const messageData =
    {
        avatar: 'https://cdn4.iconfinder.com/data/icons/hacker-1/500/hacker-hack-crime-cyber_2-512.png',
        name: 'Artem Hved',
        message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, dis dapibus primis augue cursus dui, ',
        time: '22:00',
    }

const HW1 = () => {

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
