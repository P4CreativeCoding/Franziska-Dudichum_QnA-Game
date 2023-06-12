import React, { useEffect, useState } from "react";
import "./display.css";
import questionData from "../data/questions.json";
import answerData from "../data/answers.json";
import axios from "axios";

function Display() {
  const [backendData, setBackendData] = useState([{}]);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [data, setData] = useState(null);

  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionData.length);
    const randomQuestion = questionData[randomIndex];
    setRandomQuestion(randomQuestion);
  }

  //UNIT TEST//
  // Test that randomIndex is within the valid range of indices

  test("randomIndex should be within valid range", () => {
    getRandomQuestion();
    const randomIndex = Math.floor(Math.random() * questionData.length);
    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThan(questionData.length);
  });

  // Test that randomQuestion is a valid question object from questionData
  test("randomQuestion should be a valid question object", () => {
    getRandomQuestion();
    const randomQuestion = getRandomQuestion(); // Replace with the actual function to get the random question
    expect(questionData).toContain(randomQuestion);
  });

  // Test that setRandomQuestion() is called with the correct parameter
  test("setRandomQuestion should be called with the correct parameter", () => {
    const setRandomQuestion = jest.fn();
    getRandomQuestion();
    expect(setRandomQuestion).toHaveBeenCalledTimes(1);
    expect(setRandomQuestion).toHaveBeenCalledWith(expect.any(Object));
  });

  // Test that getRandomQuestion() returns a value
  test("getRandomQuestion should return a value", () => {
    const result = getRandomQuestion();
    expect(result).toBeDefined();
  });

  // Test that getRandomQuestion() does not throw an error
  test("getRandomQuestion should not throw an error", () => {
    expect(getRandomQuestion).not.toThrow();
  });

  ////////////////////////////////////////////

  function handleButtonClick(answer) {
    console.log(answer);
    // Add your desired logic here
    // http request to server (aijax adress axios)
    axios
      .get("../data/answers.json")
      .then((answers) => {
        console.log(answers.answers);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    getRandomQuestion();
  }, []);

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

        {answerData.map((answer) => (
          <button key={answer.id} onClick={() => handleButtonClick(answer)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Display;
