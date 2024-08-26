import { useState } from 'react'
import './App.css'
import axios from 'axios'

const API_KEY = "AIzaSyBkgF3zky13xEe2O8oiTadpvNaWFymgD-I"

function App() {
  const [question , setQuestion] = useState("")
  const [answer,setAnswer]= useState("")


async  function generateAnswer(){
    console.log("LOADING.....");
  
  setAnswer("Loading...")
  const response = await  axios({
      
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      method:"post",
      data:{"contents":
        [{"parts":[{"text":`${question}`}]}]}
    })
  
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
    console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]); 
  
  }
    
  return (

    <div className='container'>
    <input type='text' value={question} onChange={(event)=>
      setQuestion(event.target.value)}
      placeholder='ASK ME ANYTHING..' />
      <button onClick={generateAnswer}>ASK ME....</button>
      <p>{answer}</p>
    </div>
    
  )
}

export default App









