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
            <div className={s.div_class}>
                <span>{props.affair.name}</span>
                <div>{props.affair.priority}</div>
            </div>
            <button onClick={deleteCallback} className={s.button}>x</button>
        </span>
    )
}

export default Affair
