import React, { useContext, useEffect, useRef, useState } from 'react'
import { StepsContext } from '../context/StepsContext'

const NavBar = () => {

    const { steps } = useContext(StepsContext)

    const navBarRef = useRef(null)
    const [bullets, setBullets] = useState([])

    const { currentStep, setCurrentStep, inputValues } = useContext(StepsContext)



    useEffect(() => {
        if (navBarRef.current) {
            setBullets(navBarRef.current.querySelectorAll('li'))
        }
    }, [])



    useEffect(() => {
        bullets.forEach(x => {
            x.classList.remove('active')
        })
        bullets[currentStep]?.classList.add('active')
    }, [bullets, currentStep])



    const [emptyValues, setEmptyValues] = useState('')
    useEffect(() => {
        setEmptyValues(inputValues.filter(x => x === ''))
    }, [inputValues])



    return (
        <ul className='navbar' ref={navBarRef}>
            {
                steps.map((step, index) => {
                    return (
                        <li key={step.id}
                            onClick={(e) => {
                                bullets.forEach(x => x.classList.remove('active'))
                                if (emptyValues.length === 0) {
                                    e.currentTarget.classList.add('active')
                                    setCurrentStep(index)
                                    console.log(emptyValues.length)
                                }
                            }}
                        >
                            <div className="link">
                                <div className="number">{step.id}</div>
                                <div className="info">
                                    <p>{`step ${step.id}`}</p>
                                    <div className="name">{step.name}</div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavBar