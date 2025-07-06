const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const flag = "FLAG{4dm1n_15_3v3ry_7h1ng}";

app.get('/', (req, res) => {
    res.send(`Only role = "admin" can get the flag. the path is <the base URL>/get_flag`);
});

app.post('/get_flag', (req, res) => {
    const { role } = req.body;
    
    if (role === "admin") {
        res.json({ flag: flag });
    } else { 
        res.status(403).json({ error: "Access denied: wrong role" });
    }
});

app.listen(port, () => {
    console.log(`CTF server running at http://localhost:${port}`);
});
