require('dotenv').config();


const express =  require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const app = express();
const addFunk = require('./funk');

// Two ways to do this
// 1. PORT=3000 nodemon index.js (an environment variable)
// 2. nodemon index.js port=3000 (an arguement)
const PORT = process.env.PORT || 3000;

// Get API_KEY from enviroment (NEVER COMMIT TO GIT!)
const API_KEY = process.env.API_KEY;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// User can request weather for a city
app.get('/api/weather/:latlong', (req, res) => {
    
    const { latlong } = req.params; // 37.8267,-122.4233

    // Test our latlong
    let test = latlong.split(',').map(item => parseFloat(item));
    if(test.length !== 2){
        res.json({error: 'Please send lat and lon coordinates as 37.8267,-122.4233'})
    } else if (!isFloat(test[0]) || !isFloat(test[1])){
        res.json({error: 'Please send valid lat and lon coordinates as 37.8267,-122.4233'})
    } else {

        let uri = `https://api.darksky.net/forecast/${API_KEY}/${latlong}`;
        
        //*/ https://github.com/request/request-promise#get-something-from-a-json-rest-api
        request.get({uri, json: true})
            .then(jsonResponseFromDarkSky => {

                let { currently } = jsonResponseFromDarkSky;

                addFunk(currently);
                
                // Send back to our users
                // Basically right now we're a glorified middleman :(
                res.json(currently);
            })
            .catch(err => {
                console.log('Error from DarkSky:', err);
                res.json({error: 'There was an issue with your request. Our systems admins are looking into it!'})
            })
        //*/ res.json({uri});
    }

});


// Setup route at root
app.get('/', (req, res) => {
    res.send('Welcome to HipsterWeather');
});

// Listen on a given port + function
// PORT (environment variable) 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

// Function to check is float
// re: https://stackoverflow.com/a/3886106
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}