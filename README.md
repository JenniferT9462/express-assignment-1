# express-assignment-1

## Overview

This assignment provides hands-on experience with Express, a Node.js framework, by guiding students through the creation and setup of a simple server with specified routes.

## Setup

1. Create a new `Github` repository named `express-assignment-1`.

2. Generate a `package.json file` by running the following in  your terminal:

        npm init -y

3. Install `express.js` by running:

        npm install express

4. Create a file named `server.js`. This is where your routes will go. 

## Server implementation

1. In the `server.js` file import express:

        import express from "express";

2. To create a instance of express:

        const app = express();

3.  Build an Express server with the following routes:

    - GET `/` Returns "Welcome to the Express server!"
    
            app.get('/', (req, res) => {
                res.send('Welcome to the Express server!!')
            })
        
    
    - GET `/about` Returns "This is the about page."

            app.get('/about', (req, res) => {
                res.send('This is the about page.')
            })

    - POST `/data` Accepts and returns JSON data.


            // Add the express.json() middleware for route handlers
            app.use(express.json());

            //POST route w/body request
            app.post('/data', (req, res) => {
                //Need middleware to return body request back
                const data = req.body;
                res.json(data);
            })

4. To start the server you need to add this to the `server.js` file:

        //Start the server
        app.listen(3000, () => {
            console.log("Example app listening on port 3000")
        })

## Development - Use `nodemon`

* `nodemon` allows us to make changes and updates in real-time instead of having to run `node server.js` again. 

1. Install `nodemon` by running:

        npm install --save-dev nodemon

2. Update the `package.json` file:
    - Note: That the file needs to match what you named your `.js` file.

            "scripts": {
                "start": "node server.js",
                "dev": "nodemon server.js"
            }
3. Now when we run `npm run dev` to start the server.

## Testing

- Use `Postman` for testing routes:

    * GET / should return "Welcome to the Express server!"
        - Endpoint: http://localhost:3000/
        ![GET root](<rootPostman.png>)
    * GET /about should return "This is the about page."
        - Endpoint: http://localhost:3000/about
        ![GET about](<aboutPostman.png>)
    * POST /data should accept and return JSON data.
        - Endpoint:  http://localhost:3000/data
        ![POST data](<dataPostman.png>)

## Acknowledgements

- Express website: <https://expressjs.com/en/starter/hello-world.html>
- GeeksforGeeks: <https://www.geeksforgeeks.org/express-js-express-json-function/>
- Javascript Today: <https://javascripttoday.com/blog/model-view-controller-architecture/>