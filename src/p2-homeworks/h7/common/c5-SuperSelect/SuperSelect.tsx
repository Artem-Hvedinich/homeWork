import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../../HW7.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options!.map((m, i) =>
        <option key={i} value={m}>{m}</option>);

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption!(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={s.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
