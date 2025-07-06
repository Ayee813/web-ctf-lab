const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const flag = "here is flag";

app.get('/', (req, res) => {
    res.send("hello");
});

// route => http://localhost:3000/get_flag

const secret = "welcom_to_web_hacking"

app.get('/', (res) => {
    res.send("hello");
});

app.post('/', (req, res) => {
    res.json({flag:secret})
    
});


app.listen(port, () => {  
    console.log(`server is running on http://localhost:${port}`);
});
