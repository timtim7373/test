import express = require('express');
import {RetrieveIntent} from './modules/RetrieveIntent';

const app: express.Application = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
let retrieveIntent = new RetrieveIntent();
retrieveIntent.getPrediction("").then(()=>console.log("done")).catch((err)=>console.log(err));

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});