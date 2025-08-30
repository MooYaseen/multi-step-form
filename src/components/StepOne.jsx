import React, { useContext } from 'react'
import { StepsContext } from '../context/StepsContext'

const StepOne = () => {

    const { stepsData, currentStep, inputValues, inputSetters } = useContext(StepsContext)


    return (
        <>

            <div className="header">
                <h1>{stepsData[currentStep].head.title}</h1>
                <p>{stepsData[currentStep].head.text}</p>
            </div>

            <main>
                {stepsData[currentStep].content.map((step, index) => {
                    return (

                        <label htmlFor={step.type} key={step.type}>
                            
                            <div className="info">
                                <p>{step.label}</p>
                                <span className='req'>This Field is Required</span>
                            </div>

                            <input type={step.type} name="name" id={step.type}
                                placeholder={step.placeholder} required
                                autoFocus={index === 0}
                                value={inputValues[index] || ''}
                                onBlur={(e) => {
                                    if (e.currentTarget.value === '') {
                                        e.currentTarget.classList.add('need')
                                    }
                                }}
                                onChange={(e) => {
                                    e.currentTarget.classList.remove('need')
                                    inputSetters[index](e.currentTarget.value)
                                }}
                            />

                        </label>
                    )
                })}
            </main>

        </>
    )
}

export default StepOne