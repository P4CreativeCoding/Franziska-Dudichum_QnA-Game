import React, { useEffect, useState } from "react";
import "./display.css";
import answerData from "../data/answers.json";

function DisplayAnswer() {

    // Randomly shuffle the data array
    const shuffledAnswer = [...answerData].sort(() => Math.random() - 0.5);
    const filteredAnswer = shuffledAnswer.slice(0, 4);
    
    const [selectedAnswerID, setSelectedAnswerID] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
    
    const handleAnswer = (answerId) => {
      setSelectedAnswerID(answerId);
      setIsAnswerSelected(true);
      // Perform additional logic or actions here
    };

    const selectedAnswer = answerData.find((answer) => answer.id === selectedAnswerID);

    useEffect(() => {
      if (selectedAnswerID) {
        localStorage.setItem('selectedAnswerID', selectedAnswerID);
      }
    }, [selectedAnswerID]);

    return (
      <div>
        <header>
          <h2>Q & A Game</h2>
          <h4>Wassup and welcome to my Q&A game</h4>
          <p>
            You will get a question from player1, where you can choose between 4
            different answers, which are chosen from you.
          </p>
        </header>
        <div className="qna-section">

          <h3>Choose your answer:</h3>
    
          {!isAnswerSelected &&
            filteredAnswer.map((answer) => (
              <button
                key={answer.id}
                className={`answer-button ${selectedAnswerID === answer.id ? 'clicked' : 'hidden'}`}
                type="button"
                onClick={() => handleAnswer(answer.id)}
              >
                {answer.text}
              </button>
            ))}
    
          {isAnswerSelected && selectedAnswer && (
            <div>
              <h2>Selected Answer:</h2>
              <p>{selectedAnswer.text}</p>
            </div>
          )}
        </div>
      </div>
    ); 
  }    

export default DisplayAnswer;
