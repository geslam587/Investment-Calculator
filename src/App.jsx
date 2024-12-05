import Header from "./combonant/header.jsx"
import Resaults from "./combonant/resaults.jsx";
import UserInput from "./combonant/userInput.jsx"
import { useState } from "react";

function App() {

  const [userInput, setUserInput]=useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
 });
 
 const inputValid = userInput.duration >= 1;

 function handleChange(inputIdentifier, newValue) {
    setUserInput( (prevUserInput) => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });        
 }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange ={handleChange}/>
      {!inputValid && (
        <p className="center"> pleas enter a duration greater than zero.</p>
      )}
      {inputValid && <Resaults input={userInput}/>}
    </>
  )
  
}

export default App
