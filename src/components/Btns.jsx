import React, { useContext, useEffect, useState } from 'react'
import { StepsContext } from '../context/StepsContext'

const Btns = () => {


    const { setNextStep, currentStep, inputValues } = useContext(StepsContext)




    const [emptyValues, setEmptyValues] = useState('')
    useEffect(() => {
        setEmptyValues(inputValues.filter(x => x === ''))
    }, [inputValues])


    return (
        <div className='btns'>
            <div className={currentStep === 0 ? "btn back disable" : "btn back"}
                onClick={() => {
                    setNextStep(-1)
                }}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        e.currentTarget.click()
                        e.currentTarget.blur()
                    }
                }}
                key={`back${currentStep}`}
                tabIndex={0}
            >go back</div>
            <div className={emptyValues.length === 0 ? "btn next" : "btn next disable"}
                onClick={() => {
                    if (emptyValues.length === 0) {
                        setNextStep(1)
                    }
                }}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        e.currentTarget.click()
                        e.currentTarget.blur()
                    }
                }}
                key={`next${currentStep}`}
                tabIndex={0}
            >{currentStep === 3 ? "Confirm" : 'Next Step'}</div>
        </div>
    )
}

export default Btns