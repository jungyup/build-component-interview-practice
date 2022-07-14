const express = require('express');
const faker = require('faker');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000; // changing this value and restarting the server will change the port on which the app listens


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});