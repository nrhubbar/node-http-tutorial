/**
 * This file is an extremely simple server script in NodeJS. 
 * This file is over commented, but it will help describe what is being done at each step.
 */
const http = require('http');//Import the http library, this will allow us to handle HTTP requests
const port = 8080;//We want our computer to be listening on port 8080, make sure nothing else is listening on this port.

/**
 * This is the callback method that handles requests from a client. info can be found here {@link https://nodejs.org/api/http.html#http_event_request}
 * 
 * @param {IncomingMessage} req - this holds the data and metadata of a client request. look here for info {@link https://nodejs.org/api/http.html#http_class_http_incomingmessage}
 * @param {ServerResponse} res - this is the object we interact with to respond with a user, call the end() method to send it. look here for more info {@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
const requestHandler = (req, res) => {
    //We want to log the method of the request, and the URL they were contacting on our server. We can uses these later on to call different methods.
    console.log(`${req.method}    ${req.url}`);
    res.end("Hello World!"); //We just send back a simple string
};

//We create our server object and give it our request handler.
const server = http.createServer(requestHandler); //More info can be found here {@link https://nodejs.org/api/http.html#http_http_createserver_requestlistener}

//This is what actually kicks our server off and it begins listening on the specified port. This could fail for many different reasons, but always check if another application is already listening on that port.
server.listen(port, (err) => {
    //JS has the concept of truthy/falsey. This means we can put stuff that is not necesarilly a boolean into a if statement.
    //This is a shorthand for "If err has a value". more info can be found {@link https://www.sitepoint.com/javascript-truthy-falsy/}
    if(err) {
        console.log(`There was an error ${err}`);//Logs the error
    }
    console.log(`Listening on port: ${port}`)//Logs that the server started. Good to use so we know something happened.
});
