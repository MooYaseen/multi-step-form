import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import { useContext } from 'react'
import { StepsContext } from '../context/StepsContext'

const Content = () => {

    const { currentStep } = useContext(StepsContext)

    return (

        <div className='content' >

            {(currentStep === 0) &&
                <StepOne />
            }

            {(currentStep === 1) &&
                <StepTwo />
            }

            {(currentStep === 2) &&
                <StepThree />
            }

            {(currentStep === 3) &&
                <StepFour />
            }

        </div >
    )
}

export default Content