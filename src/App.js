import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./Pages/Result/Result.js";
import Home from "./Pages/Home/Home.js";
import Quiz from "./Pages/Quiz/Quiz";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  //   {console.log(questions)}

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />

          <Route
            exact
            path="/Quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                setScore={setScore}
                setQuestions={setQuestions}
                score={score}
              />
            }
          />

          <Route exact path="/Result" element={<Result   
           name={name}
           score={score}
          />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
