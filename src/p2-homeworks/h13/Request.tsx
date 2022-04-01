import React, {useEffect, useState} from 'react';
import {requestsAPI} from "./API/requestsAPI";
import s from '../h2/Affairs.module.css'
import {Checkbox} from "@material-ui/core";

export const Request = () => {

    const [value, setValue] = useState<boolean>(false)

    const onClickPost = () => {
            requestsAPI.postCheckbox(value)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log({...error})
                    console.log(error.response ? error.response.data.errorText : error.message)
                })
    }

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Checkbox sx={{'& .MuiSvgIcon-root': {fontSize: 35}}}
                      color={'success'} onClick={() => setValue(!value)}/>
            <button className={s.button1} onClick={onClickPost}>Post
            </button>
        </div>
    )
}


