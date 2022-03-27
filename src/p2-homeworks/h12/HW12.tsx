import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some', 'gold','purple'];

function HW12() {
    let theme = useSelector<AppStoreType, string>(state => state.themes.theme)

    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div className={s[theme]}>
                <div className={s.select_block}>
                    <SuperSelect
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}/>
                </div>
                <SuperRadio
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}/>
                <hr/>
            </div>
        </div>
    );
}

export default HW12;
