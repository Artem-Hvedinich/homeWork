import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [valueMin, setValueMin] = useState(0)
    const [valueMax, setValueMax] = useState(100)
    const valueMinHandler = (valueMin <= valueMax) ? valueMin : 50
    const numberContentMin = (valueMin <= valueMax) ? valueMin : 'No valid Range'
    const valueMaxHandler = (valueMin <= valueMax) ? valueMax : 50
    const numberContentMax = (valueMin <= valueMax) ? valueMax : ''

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>
                <SuperRange onChangeRange={setValueMin}
                            valueMinHandler={valueMinHandler}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange onChangeRange={setValueMin}
                                  onChangeRange2={setValueMax}
                                  valueMinHandler={valueMinHandler}
                                  valueMaxHandler={valueMaxHandler}
                                  numberContentMin={numberContentMin}
                                  numberContentMax={numberContentMax}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
