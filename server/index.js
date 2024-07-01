const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/users', (req, res) => {
    const dataPath = path.join(__dirname, 'data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData.users);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
