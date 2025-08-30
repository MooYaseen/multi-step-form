import React, { useContext } from 'react'
import { StepsContext } from '../context/StepsContext'


const StepThree = () => {



    const { stepsData, currentStep, pricePlan, setSelectedServ, selectedServ } = useContext(StepsContext)






    return (
        <>
            <div className="header">
                <h1>{stepsData[currentStep].head.title}</h1>
                <p>{stepsData[currentStep].head.text}</p>
            </div>
            <main>
                <div className="add-ons">
                    {stepsData[currentStep].content.map((serv, index) => {
                        return (
                            <label className='choose-serv' htmlFor={serv.name} key={serv.name}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        e.currentTarget.click()
                                    }
                                }}
                            >
                                <input type="checkbox" name="service" id={serv.name}
                                    checked={selectedServ[index].selected === true}
                                    value={pricePlan === 'monthly' ? serv.Mprice : serv.Yprice}
                                    onChange={(e) => {
                                        if (e.currentTarget.checked) {
                                            setSelectedServ(prev =>
                                                prev.map((x, idx) =>
                                                    idx === index ?
                                                        ({ ...x, Mprice: serv.Mprice, Yprice: serv.Yprice, selected: true }) : x
                                                )
                                            )
                                        }
                                        else {
                                            setSelectedServ(prev =>
                                                prev.map((x, idx) =>
                                                    idx === index ?
                                                        ({ ...x, selected: false }) : x
                                                )
                                            )
                                        }
                                    }}
                                />
                                <div className="check">
                                    <img src="public/assets/images/icon-checkmark.svg" alt="" />
                                </div>
                                <div className="serv-info">
                                    <div className="serv-name">{serv.name}</div>
                                    <p>{serv.info}</p>
                                </div>
                                <div className="serv-price">
                                    {pricePlan === 'monthly' ?
                                        `+$${serv.Mprice}/mo`
                                        :
                                        `+$${serv.Yprice}/yr`
                                    }
                                </div>
                            </label>

                        )
                    })
                    }
                </div>


            </main >
        </>
    )
}

export default StepThree