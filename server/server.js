const express = require('express')
const app = express()

app.get("/api" , (req, res ) => {
    res.json({ "questions": [" question1", "question2", "question3 "] })
})  

app.get("/api" , (req, res ) => {
    res.json({ "answers": [" answer1", "answer2", "answer3 "] })
}) 

app.listen(4000, () => { console.log("server started on port 4000") })