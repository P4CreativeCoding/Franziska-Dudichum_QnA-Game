import React, {useEffect, useState} from 'react'

function App() {

const [backendData, setBackendData ] = useState([{  }]) 

useEffect(() => {
  fetch("/api ").then(
    response => response.json()  
  ).then(
    data =>  { 
      setBackendData(data ) 
    }
  )
}, [])

  return ( 
    <div>
      <header>
        <h2>Q & A Game</h2>
        <h4>Wassup and welcome to my qna game</h4>
        <p>you will get a random question, where you can choose between 4 diffrent answers, which are chosen randomly</p>
      </header>  
      <div className='qna-section'>
        <h3>Your question:</h3>
        <div>
          {(typeof backendData.users === 'undefined')? (
            <p>Loading...</p>
          ):(
            backendData.users.map(( user, i ) => (
              <p key={i}>{user}</p>
            ))
          )}
        </div>

        <h3>Your answers:</h3>

        <div>
          {(typeof backendData.users === 'undefined')? (
            <p>Loading...</p>
          ):(
            backendData.users.map(( user, i ) => (
              <p key={i}>{user}</p>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App