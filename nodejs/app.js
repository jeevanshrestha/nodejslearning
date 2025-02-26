

const http = require('http')

// function requestListener(req, res){
//     console.log(req)
// }

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
   // process.exit();


});


const PORT = 3001;
server.listen(PORT, ()=> {
    console.log(`Server running at address:', 'http://localhost:${PORT}`);
})