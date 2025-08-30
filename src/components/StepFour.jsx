import React, { useContext, useEffect, useState } from 'react'
import { StepsContext } from '../context/StepsContext'


const StepFour = () => {

    const { stepsData, currentStep, setCurrentStep, selectedServ, pricePlan, selectedPlan } = useContext(StepsContext)

    const [additionalPlans, setAdditionalPlans] = useState([])




    const [totalPlans, setTotalPlans] = useState([])


    useEffect(() => {
        setTotalPlans([...additionalPlans, selectedPlan])
    }, [additionalPlans, selectedPlan])


    useEffect(() => {
        setAdditionalPlans(selectedServ.filter(x => x.selected === true))
    }, [selectedServ])



    return (
        <>
            <div className="header">
                <h1>{stepsData[currentStep].head.title}</h1>
                <p>{stepsData[currentStep].head.text}</p>
            </div>
            <main>

                <div className="final-plans">
                    <div className="main-plan">
                        <div className="text">
                            <div className="name">{`${selectedPlan.type} (${pricePlan})`}</div>
                            <div className="change"
                                onClick={() => {
                                    setCurrentStep(1)
                                }}
                            >Change</div>
                        </div>
                        <div className="price">{pricePlan === 'monthly' ? `$${selectedPlan.Mprice}/mo` : `$${selectedPlan.Yprice}/yr`}</div>
                    </div>
                    <div className="sub-plans">
                        {additionalPlans.map(plan => {
                            return (
                                <div className="plan" key={plan.name}>
                                    <div className="text">
                                        <div className="name">{plan.name}</div>
                                    </div>
                                    <div className="price">{pricePlan === 'monthly' ? `$${plan.Mprice}/mo` : `$${plan.Yprice}/yr`}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="total">
                    <p>{`Total (per ${pricePlan === 'monthly' ? 'month' : 'year'})`}</p>
                    <div className="total-price">{`
                            $${totalPlans.reduce((sum, plan) => {
                        return pricePlan === 'monthly' ?
                            sum + parseInt(plan.Mprice) : sum + parseInt(plan.Yprice)
                    }, 0)}${pricePlan === 'monthly' ? '/mo' : '/yr'}`}
                    </div>
                </div>

            </main>

        </>

    )
}

export default StepFour