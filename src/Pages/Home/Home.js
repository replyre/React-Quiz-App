import React, { useState } from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import Categories from "../../Data/Categories.js";
import { Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage"


// fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple")
// .then(res=>res.json())
// .then(data=>console.log(data))

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const handleSubmit=()=>{
    console.log(name,category,difficulty)
   if(!name || !difficulty|| !category){
    setError(true);
    return;
   }
   else{
    setError(false);
    fetchQuestions(category,difficulty)
        navigate('/Quiz')
   }
  }
  return (
    <div className="content">
      <div className="prerequisite">
        <span>Please fill the details</span>
        <div className="select">
            {error && <ErrorMessage>All details are not filled</ErrorMessage>}
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            select
            label="select category"
            varient="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            select
            label="select difficulty"
            varient="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Difficult" value="difficult">
              Difficult
            </MenuItem>
          </TextField>
          <Button varient="contained" color="inherit" id="button" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img
        src="https://www.trainerbubble.com/wp-content/uploads/2015/09/General-Knowledge_web.jpg"
        className="img"
        alt="quiz img"
      />
    </div>
  );
};

export default Home;
