import React, { useEffect, useState } from "react";
import "./display.css";
import questionData from "../data/questions.json";
import io from "socket.io-client";

function DisplayQuestion() {

  const [randomQuestion, setRandomQuestion] = useState(null);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);
  const [isQuestionSelected, setIsQuestionSelected] = useState(false);
  
  const socket = io("https://qna-game.onrender.com");

  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questionData.length);
    const randomQuestion = questionData[randomIndex];
    setRandomQuestion(randomQuestion);
  }

  useEffect(() => {
    getRandomQuestion();
  }, []);
    // Randomly shuffle the data array
  useEffect(() => {
    getRandomQuestion();
  }, []);

  useEffect(() => {
    socket.on('question', (question) => {
      setRandomQuestion(question);
      setIsQuestionSelected(false);
      setSelectedQuestionID(null);
    });
  
    return () => {
      socket.off('question');
    };
  }, [socket]);
  
    const shuffledQuestions = [...questionData].sort(() => Math.random() - 0.5);
    const filteredQuestions = shuffledQuestions.slice(0, 4);
    
    
    
    const handleQuestion = (questionId) => {
      setSelectedQuestionID(questionId);
      setIsQuestionSelected(true);
      // Perform additional logic or actions here
      socket.emit('question', questionId);
    };
    
    const selectedQuestion = questionData.find((question) => question.id === selectedQuestionID);

    useEffect(() => {
      if (selectedQuestionID) {
        localStorage.setItem('selectedQuestionID', selectedQuestionID);
      }
    }, [selectedQuestionID]);

    return (
      <div>
        <header>
          <h2>Q & A Game</h2>
          <h4>Wassup and welcome to my Q&A game</h4>
          <p>
            You will choose between 4
            different questions.
          </p>
        </header>
        <div className="qna-section">
          <h3>Choose your question:</h3>
          <div>
            {randomQuestion ? (
              <div>
               {!isQuestionSelected &&
                filteredQuestions.map((question) => (
                  <button
                   key={question.id}
                   className={`question-button ${selectedQuestionID === question.id ? 'clicked' : 'hidden'}`}
                   type="button"
                  onClick={() => handleQuestion(question.id)}
                  >
                {question.text}
              </button>
            ))}
            {isQuestionSelected && selectedQuestion && (
            <div>
              <h2>Selected Question:</h2>
              <p>{selectedQuestion.text}</p>
            </div>
          )}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
    
        </div>
      </div>
    ); 
  }    

export default DisplayQuestion;
