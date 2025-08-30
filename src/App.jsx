import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Btns from './components/Btns'

import { StepsContext } from './context/StepsContext'
import Finish from './components/Finish'


function App() {

  const steps = [
    { id: 1, name: 'your info' },
    { id: 2, name: 'select plan' },
    { id: 3, name: 'add-ons' },
    { id: 4, name: 'summary' }
  ]




  const stepsData = [
    // Start First Step ,,,
    {
      head: {
        title: 'personal info',
        text: 'please provide your name, email address, and phone number'
      },
      content: [
        { type: 'text', label: 'name', placeholder: 'e.g. Mohamed Yaseen' },
        { type: 'email', label: 'email address', placeholder: 'e.g. mohamed@lorem.com' },
        { type: 'number', label: 'phone number', placeholder: 'e.g. +1 23 456 789' }
      ]
    },
    // End First Step ,,,

    // Start Second Step ,,,
    {
      head: {
        title: 'select your plan',
        text: 'you have the option of monthly or yearly billing'
      },
      content: [
        {
          imgUrl: 'public/assets/images/icon-arcade.svg',
          type: 'arcade',
          Mprice: '9',
          Yprice: '90',
          free: '2 months free'
        },
        {
          imgUrl: 'public/assets/images/icon-advanced.svg',
          type: 'advanced',
          Mprice: '12',
          Yprice: '120',
          free: '2 months free'
        },
        {
          imgUrl: 'public/assets/images/icon-pro.svg',
          type: 'pro',
          Mprice: '15',
          Yprice: '150',
          free: '2 months free'
        }
      ]

    },
    // End Second Step ,,,

    // Start Third Step
    {
      head: {
        title: 'Pick add-ons',
        text: 'Add-ons help enhance your gaming experience.'
      },
      content: [
        {
          name: 'Online service', info: 'Access to multiplayer games',
          Mprice: '1',
          Yprice: '10'
        },
        {
          name: 'Larger storage', info: 'Extra 1TB of cloud save',
          Mprice: '2',
          Yprice: '20'
        },
        {
          name: 'customizable profile', info: 'custom theme on your profile',
          Mprice: '2',
          Yprice: '20'
        }
      ]
    },

    // End Third Step


    {
      head: {
        title: 'Finishing up',
        text: 'Double-check everything looks OK before confirming.'
      }
    }

    // Start Fourth Step



    // End Fourth Step
  ]



  const [selectedPlan, setSelectedPlan] = useState({
    type: 'arcade',
    Mprice: 9,
    Yprice: 90
  })






  const [currentStep, setCurrentStep] = useState(0)



  const [selectedServ, setSelectedServ] = useState([
    { name: 'online service', Mprice: '', Yprice: '', selected: false },
    { name: 'larger storage', Mprice: '', Yprice: '', selected: false },
    { name: 'customizable profile', Mprice: '', Yprice: '', selected: false }
  ])


  const setNextStep = (x) => {
    setCurrentStep(prev =>
      Math.max(0, Math.min(steps.length, prev + x))
    );
  };




  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputNumber, setInputNumber] = useState('')

  const inputSetters = [setInputName, setInputEmail, setInputNumber]
  const inputValues = [inputName, inputEmail, inputNumber]

  const [pricePlan, setPricePlan] = useState('monthly')



  return (
    <div className="container">

      <StepsContext.Provider
        value={{
          steps, stepsData,
          currentStep, setCurrentStep,
          setNextStep,
          selectedServ, setSelectedServ,
          inputSetters, inputValues,
          pricePlan, setPricePlan,
          selectedPlan, setSelectedPlan
        }}>
        <NavBar />
        <div className='content-container'>
          {
            currentStep === 4 ?
              <Finish />
              :
              <>
                <Content />
                <Btns />
              </>
          }
        </div>

      </StepsContext.Provider>

    </div >
  )
}
export default App