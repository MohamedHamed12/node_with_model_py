// server.js
const express = require('express');
const ps = require('python-shell');

const app = express();
const PORT = 3000;

let options = {
    args: [5] // Assuming the number is passed as a command-line argument
};
// run model.py
ps.PythonShell.run('model.py', options, function (err, results) {
    if (err) throw err;
    console.log('results: %j', results);
});
// ------------
// read txt file 
//----------
const fs = require('fs');
const data = fs.readFileSync('number.txt', 'utf8');
console.log(data);
//-------------

app.get('/', (req, res) => {
    res.send('Hello World! res = ' + res);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
