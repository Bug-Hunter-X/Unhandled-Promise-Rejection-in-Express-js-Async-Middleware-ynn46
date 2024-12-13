const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  processAsyncData(data)
    .then(() => {
      res.send('Data processed successfully!');
    })
    .catch(error => {
      console.error('Error processing data:', error);
      //Proper solution: Send a meaningful error response with status code and error details
      res.status(error.status || 500).json({ error: error.message || 'Internal Server Error' });
    });
});

async function processAsyncData(data) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (data.someProperty === 'badValue') {
    const error = new Error('Invalid data');
    error.status = 400; // Set appropriate HTTP status code
    throw error;
  }
  // ... further processing ...
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));