import React, { useEffect, useState } from "react";
import questionData from "./components/data/questions.json";
import answerData from "./components/data/answers.json";

function App() {
  //normal backend
  const [backendData, setBackendData] = useState([{}]);

  //--------------------------------CONST---------------------------------------------//

  //Random question
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [jsonQuestionData, setJsonQuestionData] = useState(questionData);
  const [jsonAnswerData, setJsonAnswerData] = useState(answerData);

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
  //Random question
  useEffect(() => {
    getRandomQuestion();
  }, []);

  //Play again

  //normal backend
  useEffect(() => {
    fetch("/api ")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  //---------------------------------RENDER--------------------------------------------//

  return (
    <div>
      <header>
        <h2>Q & A Game</h2>
        <h4>Wassup and welcome to my qna game</h4>
        <p>
          you will get a random question, where you can choose between 4
          diffrent answers, which are chosen randomly
        </p>
      </header>
      <div className="qna-section">
        <h3>Your question:</h3>

        <div>
          <h1>Random Question</h1>
          {randomQuestion ? (
            <div>
              {/* <p>Question ID: {randomQuestion.id}</p> */}
              <p>Question: {randomQuestion.text}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* old code */}

        {/* <ul>
          {jsonQuestionData.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul> */}

        {/* <div>
          {typeof backendData.users === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
          )}
        </div> */}

        <h3>Your answers:</h3>

        <div>
          {typeof backendData.users === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.users.map((user, i) => <p key={i}>{user}</p>)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
