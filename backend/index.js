// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/save-css', (req, res) => {
  const { cssContent } = req.body;
  fs.writeFile(path.join(__dirname, 'selected.css'), cssContent, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving CSS' });
    }
    res.status(200).json({ message: 'CSS saved successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
