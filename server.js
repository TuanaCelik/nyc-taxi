require('dotenv').load();
const express = require('express');
const Cumulio = require('cumulio');
const { join } = require('path');

const app = express();

const client = new Cumulio({
    api_key: process.env.CUMULIO_API_KEY,
    api_token: process.env.CUMULIO_API_TOKEN
  });

  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });
  
  // Listen on port 3000
  app.listen(3000, () => console.log('Application running on port 3000'));