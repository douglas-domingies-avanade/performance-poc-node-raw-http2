import { createServer } from 'http2';

const { PORT = 8008 } = process.env;

const server = createServer((req, res)=>{
    res.write('OK');
    res.end(()=>{

    });
});

server.listen(PORT, () =>{
    console.log('We are live on port', PORT);
});