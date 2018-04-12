import * as http from 'http';
import App from './app';

const port = process.env.PORT || 3000;
// app.set('port',port);
const server = http.createServer(App);

server.listen(port,() => {
    console.log(`listening on port ${port}...`)
});



