const express = require('express');
const app = express();

// Define a route
app.get('/api', (req, res) => {
  const jsonData = {
    message: 'Hello, World!'
  };
  res.json(jsonData);
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
