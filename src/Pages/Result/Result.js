import { Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'

import"./Result.css"
const Result = (props) => {
const navigate=useNavigate()

useEffect(()=>{
 if(!props.name) navigate("/")
},[props.name])


  return (
    <div className='result'>  
    <h1>Dear, {props.name}</h1>
   {(props.score>=5) && <h1>Congrates!!</h1>} 
   {(props.score>=5) && <Confetti width={1500} height={1000}/>} 
    <h2>Your Final Score: {props.score}</h2>
    {(props.score<=5) &&<h6>To see something good, score up to 5</h6>}
    <Button
    varient="contained"
    color='secondary'
    size="large"
    style={{ color:"white",alignSelf:"center", marginTop:20, backgroundColor:"red"}}
    href="/">Home Page</Button>
    </div>
    
  )
}

export default Result
