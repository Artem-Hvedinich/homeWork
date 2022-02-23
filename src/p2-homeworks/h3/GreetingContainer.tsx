import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from "./Greeting.module.css";
import {isNumber} from "util";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (userName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({users, addUserCallback}) => {
        const [name, setName] = useState<string>('')
        const [error, setError] = useState<boolean>(false)

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
            setError(false)
        }
        const addUser = () => {
            const trimmedTitle = name.trim()
            if (trimmedTitle.length > 1) { //Ставим цензуру на имя минимум из 2 букв
                addUserCallback(trimmedTitle)
                alert(`Hello ${trimmedTitle} !`)
            } else {
                alert(`${trimmedTitle}: no valid name`)
                setError(true)
            }
            setName('')
        }


        const totalUsers = users.length

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        )
    }

export default GreetingContainer
