# Weather App

## Setup a new project
- [x] Setup readme.md
- [x] Create .gitignore
    - node_modules/
- [x] Setup git repository (i.e. repo)
    - `git init`   (i.e. creates new repo)
- [x] Commit readme.md
    - `git add .`  (i.e. adds all files)
    - `git commit -m "initial commit"`  (i.e. commit with m - message)
- [x] Setup git remote (push to remote)
    - `git push`
- [x] `npm init` (creates package.json)
- [x] `npm i nodemon --save -D`
- [x] `npm i express --save`
- [x] `npm i body-parser --sav`e` (i.e. bodyParser.json() middleware)
- [x] `npm i request request-promise --save`
- [x] Visually double check package.json all packages exist in right place
- [x] Commit changes 
- [x] Add ` for code in readme.md

## Express API
- [x] Create express app
    - `const express =  require ('express');` 
    - `const app = express();`
- [x] Add HTTP_PORT passed in or default
    - default http port is 80.
    - default https port is 443.
    - ports below 1024?? are priviledged (you'd have to use `sudo` to start your app with a password)
    - So, we'll use port `3000` as our default
    - `const HTTP_PORT = process.env.HTTP_PORT || 3000;` 
- [x] Add body parser middleware
    - Added json and for submitted forms
- [x] Add endpoint /api/weather/:city
    ```js 
    app.get('/api/weather/:city', (req, res) => {
    
        let obj = {
            "hello": "world"
        }
        res.json(obj);
    });
    ```
- [x] Listen for requests
    ```js
    app.listen(HTTP_PORT, () => {
        console.log(`Listening on port ${HTTP_PORT}...`);
    });
    ```
- [x] Setup nodemon to monitor index.js in package.json under scripts
    - `"dev": "nodemon index.js"`
    - execute on command line: `npm run dev`

## Dark Sky API
- [x] Setup account at darksky for weather api
- [x] Use request-promise library to make a request
    - We could use a js client library provided by [Dark Sky](https://darksky.net/dev/docs/libraries).
- [x] DO NOT COMMIT THE API KEY, PASS IN AS AN ENVIRONMENT VARIABLE
    - `API_KEY=xxxxxxxxx`
- [x] Setup a .env library ([dotenv](https://github.com/motdotla/dotenv#dotenv)) to save our private keys. Add to .gitignore.
    - `npm i dotenv --save`
    - Edit index.js, add to top: `require('dotenv').config();`
    - Edit .gitignore, add `.env`
    - Add all environment variables to .env file `HTTP_PORT` and `API_KEY`

