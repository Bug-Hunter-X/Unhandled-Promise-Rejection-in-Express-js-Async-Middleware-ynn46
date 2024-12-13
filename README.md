# Unhandled Promise Rejection in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous middleware.  The provided code showcases the issue and includes a solution for proper error handling.

## The Problem

When asynchronous operations in Express.js middleware fail, the application might not respond with clear error messages to the client, leading to frustrating debugging experiences.  The example `bug.js` illustrates how an uncaught exception within a `then` block will result in a generic 500 error to the client, not showing the root cause of the error.  

## The Solution

The solution in `bugSolution.js` implements proper error handling.  The `catch` block includes better use of error handling to give clients more detail, and to properly handle unexpected errors.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install the required dependencies.
4. Run `node bug.js` or `node bugSolution.js` to start the server. 
5. Send a POST request to `http://localhost:3000/data` with a JSON payload containing a `someProperty` (e.g., using curl or Postman).
   - To trigger the error, set `someProperty` to 'badValue'.