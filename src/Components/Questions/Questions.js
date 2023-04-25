import React, { useState } from "react";
import "./Questions.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Questions = (props) => {
  const [selected, setSelected] = useState();
  const [error, SetError] = useState(false);
  const navigate = useNavigate()
  const handleSelect = (i) => {
    if (selected === i && selected === props.correct) return "selected_val";
    else if (selected === i && selected !== props.correct) return "wrong";
    else if (i === props.correct) return "selected_val";
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === props.correct) props.setScore(props.score + 1);
    SetError(false);
  };

  const handleNext =()=>{

    if(props.currQuestion>8){navigate('/Result')}
    else if(selected){
        props.setCurrQuestion(props.currQuestion+1)
        setSelected();
    }else{
        SetError("Please select an option first")
    }

  };
  
  const handleQuit=()=>{
        props.setScore(0)
  }

  return (
    <div className="question">
      <h1>Question {props.currQuestion + 1}</h1>
      <div className="question_box">
        <h2>{props.questions[props.currQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {props.options &&
            props.options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            varient="contained"
            size="large"
            style={{ backgroundColor: "red", width: 160, color: "white" }}
            href="/React-Quiz-App"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            varient="contained"
            size="large"
            style={{ backgroundColor: "navy", width: 160, color: "white" }}
            onClick={handleNext}
         >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
