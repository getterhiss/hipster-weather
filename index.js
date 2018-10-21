require('dotenv').config();

const express =  require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const app = express();

// Two ways to do this
// 1. HTTP_PORT=3000 nodemon index.js (an environment variable)
// 2. nodemon index.js port=3000 (an arguement)
const HTTP_PORT = process.env.HTTP_PORT || 3000;

// Get API_KEY from enviroment (NEVER COMMIT TO GIT!)
const API_KEY = process.env.API_KEY;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// User can request weather for a city
app.get('/api/weather/:latlong', (req, res) => {
    
    // https://github.com/request/request-promise#get-something-from-a-json-rest-api

    const { latlong } = req.params; // 37.8267,-122.4233

    let uri = `https://api.darksky.net/forecast/${API_KEY}/${latlong}`;
    //*/
    request.get({uri, json: true})
        .then(jsonResponseFromDarkSky => {
            
            // Send back to our users
            // Basically right now we're a glorified middleman :(
            res.json(jsonResponseFromDarkSky);
        })
        .catch(err => {
            console.log('Error from DarkSky:', err);
            res.json({error: 'There was an issue with your request. Our systems admins are looking into it!'})
        })
    //*/ res.json({uri});

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
