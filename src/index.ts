import { HttpError } from "http-errors";
import * as http from "http";
import app, { startConnectionDatabase } from "./app";
import { config } from "./config/config";
import { createUsers } from "./utils/createUsers";

startConnectionDatabase()
.then(createUsers)
.then(() => {
    const port = config.server.port || '3000';
    const server = http.createServer(app);

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    function onListening() {
        console.log(`Listening on ${port}`);
    }
    
    function onError(error: HttpError) {
        if (error.syscall !== 'listen') {
            throw error;
        }
      
        switch (error.code) {
            case 'EACCES':
                console.error(port + ' requires elevated privileges');
                process.exit(1);
            case 'EADDRINUSE':
                console.error(port + ' is already in use');
                process.exit(1);
            default:
                throw error;
        }
    }
});