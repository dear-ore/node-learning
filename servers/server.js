const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    //console.log(req.url);
    const pathName = req.url;
    //res.end("Server on!");
    if(pathName === '/home') {
        res.end("Welcome to my site!");
    } else if (pathName == '/about') {
        res.end("Learn more about us!");
    } else {
        res.writeHead(404, {
           'Content-type' : 'text/html' 
        });
        res.end("<h1>Page not found!</h1>");
    }
}); 

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000')
}); 