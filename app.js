// server.js
const express = require('express');
const ps = require('python-shell');

const app = express();
const PORT = 3000;

let options = {
    args: [5, 6] // Assuming the number is passed as a command-line argument
};

// run model.py

ps.PythonShell.run('model.py', options).then(messages=>{
  console.log('results: %j', messages);
});

app.get('/', (req, res) => {
    res.send('Hello World! res = ' + res);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
