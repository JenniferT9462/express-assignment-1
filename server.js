
import express from "express";
const app = express()


// Add the express.json() middleware for route handlers
//Found on https://www.geeksforgeeks.org/express-js-express-json-function/
//This is for the 'POST' route
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!!')
})

app.get('/about', (req, res) => {
    res.send('This is the about page.')
})
//POST route w/body request
app.post('/data', (req, res) => {
    //Need middleware to return body request back
    const data = req.body;
    res.json(data);
    // res.send({
    //     "name": "Jennifer",
    //     "message": "Hey, How ya doing?"
    // })
})

// POST method route with send request
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

//Start the server
app.listen(3000, () => {
    console.log("Example app listening on port 3000")
})