const express = require('express');
const bodyParser = require('body-parser');
const calculate = require('./calculator');

const app = express();
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
   
   console.log("new version");
   const input = req.body.input
   const state = JSON.stringify(req.body.calculatorState)
   const result = calculate(state, input)
   res.send(result); 
});

app.listen(3000, () => console.log('Server Started On Port 3000'));