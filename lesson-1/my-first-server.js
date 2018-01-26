const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
    console.log(`${req.method}    ${req.url}    200`);
    res.end("Hello World!");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err) {
        console.log(`There was an error ${err}`);
    }
    console.log(`Listening on port: ${port}`)
});
