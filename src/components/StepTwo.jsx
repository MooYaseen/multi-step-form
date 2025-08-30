import React, { useContext } from 'react'
import { StepsContext } from '../context/StepsContext'

const StepTwo = () => {

    const { stepsData, currentStep, pricePlan,
        setPricePlan, selectedPlan, setSelectedPlan } = useContext(StepsContext)


    const hel = (e, card) => {
        setSelectedPlan({ type: e.target.value, Mprice: card.Mprice, Yprice: card.Yprice })
    }

    return (

        <>
            <div className="header">
                <h1>{stepsData[currentStep].head.title}</h1>
                <p>{stepsData[currentStep].head.text}</p>
            </div>
            <main>
                <div className="plan-cards">
                    {stepsData[currentStep].content.map((card) => {
                        return (
                            <label key={card.type} className='choose-plan' >
                                <input type="radio" name="plan" value={card.type} id={card.type}
                                    checked={selectedPlan.type === card.type}
                                    onChange={(e) => {
                                        hel(e, card)
                                    }}
                                />
                                <div className="card" tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.code === 'Enter') {
                                            e.currentTarget.click()
                                        }
                                    }}
                                >
                                    <div className="img">
                                        <img src={card.imgUrl} alt={card.type} />
                                    </div>
                                    <div className="type">{card.type}</div>
                                    <div className="price">
                                        {
                                            pricePlan === 'monthly' &&
                                            `$${card.Mprice}/mo`
                                            ||
                                            pricePlan === 'yearly' &&
                                            `$${card.Yprice}/yr`
                                        }

                                    </div>
                                    {(pricePlan === 'yearly') &&
                                        <p className='free'>{card.free}</p>
                                    }
                                </div>
                            </label>
                        )
                    })
                    }
                </div>
                <div className={pricePlan === 'monthly' ? 'toggle' : 'toggle yearly'}>
                    <p className='m'>Monthly</p>
                    <div className="btn"
                        onClick={() => {
                            setPricePlan(prev => prev === 'monthly' ? 'yearly' : 'monthly')
                        }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') {
                                e.currentTarget.click()
                            }
                        }}
                    ><span></span></div>
                    <p className='y'>Yearly</p>
                </div>

            </main >
        </>

    )
}

export default StepTwo