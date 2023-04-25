import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import "./Quiz.css"
import "./Questions.css"
import Questions from '../../Components/Questions/Questions';

const Quiz = (props) => {

 const  [options,setOptions]=useState()
 const  [currQuestion,setCurrQuestion]=useState(0)
const handleShuffle=(four_options)=>{
    return four_options.sort(()=>Math.random()-0.5)
    
}

console.log(options);
 useEffect(()=>{
      setOptions(
        props.questions && 
        handleShuffle([
          props.questions[currQuestion]?.correct_answer,
          ...props.questions[currQuestion]?.incorrect_answers,
        ]) ) 
 },[props.questions,currQuestion])

  return (
    <div className='quiz'>
     <span className="head">
      Welcome, {props.name} !!
     </span>

     {
      props.questions?
      <>
      <div className='quizInfo'>
        <span>{props.questions[currQuestion].category}</span>
          <span> Score : {props.score}</span>
      </div>
      <Questions 
       currQuestion={currQuestion}
       setCurrQuestion={setCurrQuestion}
       questions={props.questions}
       options={options}
       correct={props.questions[currQuestion]?.correct_answer}
        score={props.score}
        setScore={props.setScore}
        setQuestions={props.setQuestions}


       />
      
      </>
      :( <CircularProgress id="circle"
       color="inherit"
       size={150}
       thickness={2} />)
     }
    </div>
  )
}

export default Quiz
