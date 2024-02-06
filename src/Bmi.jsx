import { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
    const[height,setHeight] = useState("")
    const[weight,setWeight] = useState("")
    const[bmi,setBmi] = useState(null)
    const[bmiStatus,setBmiStatus] = useState("")
    const[error,setError] = useState("")


    const calculateBmi=()=>{
        const isValidHeight =/^\d+$/.test(height)
        const isValidWeight =/^\d+$/.test(weight)
        if(isValidHeight && isValidWeight){
            const heightInMeters = height /100
            const  bmiValue = weight / (heightInMeters * heightInMeters)
            setBmi(bmiValue.toFixed(2))
            if(bmiValue < 18.5){
                setBmiStatus("underWeight")
            }else if(bmiValue >=18.8 && bmiValue < 24.9){
                setBmiStatus("Normal Weight")
            }else if(bmiValue >= 25 && bmiValue < 29.9){
                setBmiStatus("Overweight")
            }else{
                setBmiStatus("Obese")
                
            }
            setError("")
        }else{
            setBmi(null)
            setBmiStatus("")
            setError("Please Enter valid numeric values for height and weight")
        }
    }
    function clearAll(){
        setWeight("")
        setHeight("")
        setBmi(null)
        setBmiStatus("")
    }

  return (
    <div className='bmi-calculator'>
        <div className='box'>
            
        </div>
        <div className='data'>
            <h1>BMI Calculator</h1>

            {error && <p className='error'>{error}</p>}
            <div className="input-container">
                <label htmlFor='height'>Height (cm)</label>
                <input type="text" id='height' value={height} onChange={(e)=> setHeight(e.target.value)}/>
            </div>
            <div className="input-container">
                <label htmlFor='weight'>Weight (kg)</label>
                <input type="text" id='weight' value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear All</button>
            {bmi !== null && (
                  <div className="result">
                  <p>Your BMI is:{bmi}</p>
                  <p>Status: {bmiStatus}</p>
              </div>
            )}
        </div>

    </div>
  )
}

export default Bmi