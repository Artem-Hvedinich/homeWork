import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <span className={s.item}>
                <span>{props.affair.name}</span>
                <span>{props.affair.priority}</span>
            <button onClick={deleteCallback} className={s.button}>X</button>
        </span>
    )
}

export default Affair
