const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const Mailjet = require('node-mailjet');

const mailjet = Mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET,
);

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.use(bodyParser.json());

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
