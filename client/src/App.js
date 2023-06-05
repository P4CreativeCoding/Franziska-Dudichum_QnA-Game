import React, { useEffect, useState } from "react";
import questionData from "./components/data/questions.json";
import answerData from "./components/data/answers.json";

function App() {
  //--------------------------------CONST---------------------------------------------//
  //normal backend
  const [backendData, setBackendData] = useState([{}]);
  //Random question
  const [randomQuestion, setRandomQuestion] = useState(null);
  //Answers

  //------------------------------FUNCTIONS-----------------------------------------------//
  //Random question
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionData.length);
    const randomQuestion = questionData[randomIndex];
    setRandomQuestion(randomQuestion);
  }

  //Answer Select

  //---------------------------------USE-EFFECT--------------------------------------------//

  //normal backend
  useEffect(() => {
    fetch("/api ")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  //Random question
  useEffect(() => {
    getRandomQuestion();
  }, []);

  //---------------------------------RENDER--------------------------------------------//

  return (
    <div>
      <header>
        <h2>Q & A Game</h2>
        <h4>Wassup and welcome to my qna game</h4>
        <p>
          you will get a random question, where you can choose between 4
          different answers, which are chosen randomly
        </p>
      </header>

      <div className="qna-section">
        <h3>Your question:</h3>
        <div>
          {randomQuestion ? (
            <div>
              {/* <p>Question ID: {randomQuestion.id}</p> */}
              <p>Question: {randomQuestion.text}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <h3>Your answers:</h3>

        {/* <div>
          {answerData.map((item) => (
            <button key={item.id}>{item.text}</button>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
