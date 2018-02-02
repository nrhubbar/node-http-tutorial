const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

let getBody = (req, callBack) => {
    req.on('data', callBack)
};

const requestHandler = {
    "/dogs": {
        "GET": (req, res) => {
            fs.readFile("dogs.txt", (err, dogs) => {
                if (err) {
                    res.statusCode = 404;
                    res.end("No dogs found");
                } else {
                    res.statusCode = 200;
                    res.end(dogs.toString());
                }
            });
        },
        "POST": (req, res) => {
            getBody(req, (chunk) => {
                fs.appendFile("dogs.txt", chunk.toString().concat('\n'), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end("Something went wrong");
                    } else {
                        res.statusCode = 200;
                        res.end("Created new dog");
                    }
                });
            });
            
        }
    },
    "/owners": {
        "GET": (req, res) => {
            fs.readFile("owners.txt", (err, owners) => {
                if (err) {
                    res.statusCode = 404;
                    res.end("No owners found");
                } else {
                    res.statusCode = 200;
                    res.end(owners.toString());
                }
            });
        },
        "POST": (req, res) => {
            getBody(req, (chunk) => {
                fs.appendFile("owners.txt", chunk.toString().concat('\n'), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end("Something went wrong");
                    } else {
                        res.statusCode = 200;
                        res.end("Created new owner");
                    }
                });
            });
        }
    }
};


/**
 * This is the callback method that handles requests from a client. info can be found here {@link https://nodejs.org/api/http.html#http_event_request}
 * 
 * @param {IncomingMessage} req - this holds the data and metadata of a client request. look here for info {@link https://nodejs.org/api/http.html#http_class_http_incomingmessage}
 * @param {ServerResponse} res - this is the object we interact with to respond with a user, call the end() method to send it. look here for more info {@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
const requestDispatcher = (req, res) => {
    console.log(`${req.method}    ${req.url}`);
    let requestUrl = url.parse(req.url, true);
    if(requestHandler[requestUrl.path]) {
        if(requestHandler[requestUrl.path][req.method]) {
            requestHandler[requestUrl.path][req.method](req, res);
        } else {
            res.statusCode = 404;
            res.end(`${req.method} not found on ${requestUrl.path} try: ${requestHandler[requestUrl.path].keys()} `);
        }
    } else {
        res.statusCode = 404;
        res.end(`${requestUrl.path} not found try: ${requestHandler.keys()}`);
    }
};


const server = http.createServer(requestDispatcher); 

server.listen(port, (err) => {
    
    if(err) {
        console.log(`There was an error ${err}`);//Logs the error
    }
    console.log(`Listening on port: ${port}`)
});