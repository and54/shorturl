# Gatherly ShortUrl

------------

## Prerequisites

- [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Mongodb Atlas account](https://www.mongodb.com/)

------------

## Installation

Run command in terminal from Main project, it will install FrontEnd and BackEnd packages

```shell
npm run install
```

-------------

## Configuration

1. Create -BE/.env- the sample file is BE/.env.sample to add neccessary values 
```
env=development
PORT=4000
ATLAS_URI=mongodb+srv://<user>:<password>@<mongodb_id>.mongodb.net/gatherlyShortUrl?retryWrites=true&w=majority
DB_NAME=shortUrl
```


2. Create FE/.env the sample file is FE/.env.sample to add neccessary values 
```
REACT_APP_API_URL=http://localhost:4000
```

---------------

## Start Project

Run command in terminal from Main project, it will start FrontEnd and BackEnd packages

```shell
npm start 
```

---------------

## Used Packages
```json
"dependencies": {
    // Main project
    "dotenv": "^10.0.0",
    "npm-run-all": "^4.1.5",
    // Back End
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "mongodb": "^4.2.2",
    "morgan": "~1.9.1",
    // Front End
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "env-cmd": "^10.1.0",
    "history": "^5.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.2"
},
"devDependencies": {
    "nodemon": "^2.0.15"
}
```

---------------

## Posible improvement

- Typescript for FrontEnd and BackEnd
- Security implementation
- CORS implementation

---------------

## License
[MIT](https://choosealicense.com/licenses/mit/)


--------------

## Creator

Andres Munoz

[Email](ytsand@gmail.com)

[Linkedin](https://www.linkedin.com/in/andresmt)