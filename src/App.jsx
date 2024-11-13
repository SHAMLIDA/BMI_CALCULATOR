import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
  
    if (weight && height) {
      const heightInMeters = height / 100;  // Convert height from cm to meters
      const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(2);
      setBmi(calculatedBMI);
  
      if (calculatedBMI < 18.5) setMessage('Underweight');
      else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) setMessage('Normal weight');
      else if (calculatedBMI >= 25 && calculatedBMI < 29.9) setMessage('Overweight');
      else setMessage('Obese');
    } else {
      setMessage('Please enter valid weight and height');
    }
  };
  

  const resetForm = (e) => {
    e.preventDefault();
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="App">
      <div className="container shadow p-4">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calculateBMI}>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">WEIGHT:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">HEIGHT :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" style={{backgroundColor:"green",border:"none" , height:"40px"}}>Submit</button>
            <button className="btn btn-outline-secondary" style={{backgroundColor:"red",border:"none", height:"40px"}} onClick={resetForm}>Cancel</button>
          </div>
          <div className="center mt-3">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
