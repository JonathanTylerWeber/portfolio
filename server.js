const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const Mailjet = require('node-mailjet');

const mailjet = Mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET,
);

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/send-email', (req, res) => {
  const { email, name, subject, text } = req.body;

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'jonathantweber@gmail.com',
            Name: name,
          },
          To: [
            {
              Email: 'jonathantweber@gmail.com',
              Name: 'Jonathan Weber',
            },
          ],
          Subject: `${subject} - email from: ${email}`,
          TextPart: text,
        },
      ],
    });

  request
    .then((result) => {
      res.status(200).json({ message: 'Email sent successfully', result: result.body });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error sending email', error: err });
    });
});

// Handle client-side routing by serving index.html for all requests
app.get('*', (req, res) => {
  console.log('Serving index.html for:', req.url);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
