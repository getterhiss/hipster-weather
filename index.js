const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

// Two ways to do this
// 1. HTTP_PORT=3000 node index.js (an environment variable)
// 2. node index.js port=3000 (an arguement)
const HTTP_PORT = process.env.HTTP_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// User can request weather for a city
app.get('/api/weather/:city', (req, res) => {
    
    let obj = {
        "hello": req.params.city
    }
    res.json(obj);
});

// Setup route at root
app.get('/', (req, res) => {
    res.send('Welcome to HipsterWeather');
});

// Listen on a given port + function
// HTTP_PORT (environment variable) 
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}...`);
});
