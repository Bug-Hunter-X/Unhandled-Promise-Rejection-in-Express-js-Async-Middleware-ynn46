const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  processAsyncData(data).then(() => {
    res.send('Data processed successfully!');
  }).catch(error => {
    console.error('Error processing data:', error);
    //Here's the problem:  We are not sending a proper error response to the client.
    res.status(500).send('Internal Server Error');
  });
});

async function processAsyncData(data) {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (data.someProperty === 'badValue') {
    throw new Error('Invalid data');
  }
  // ... further processing ...
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));