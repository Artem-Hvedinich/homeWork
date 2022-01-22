import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

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
        const [error, setError] = useState<string>('')

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
        }
        const addUser = () => {
            if (name.length > 1) { //Ставим цензуру на имя минимум из 2 букв
                addUserCallback(name)
                alert(`Hello ${name} !`)
                setError('')
                setName('')
            }else {
                setError('Enter a valid name')
                alert(`${name}: no valid name`)
                setName('')
            }
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
