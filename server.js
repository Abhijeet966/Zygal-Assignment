
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const users = JSON.parse(data);
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            res.status(200).send('Login Successful');
        } else {
            res.status(401).send('Unauthorized');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
