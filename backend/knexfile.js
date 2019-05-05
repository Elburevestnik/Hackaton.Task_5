const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
 module.exports = {
     development: {
         client: 'pg',
         connection: 'postgres://lisa:daughtry8@localhost:5432/lisa',
         migrations: {
             directory: path.join(BASE_PATH, 'migrations')
         },
         seeds: {
             directory: path.join(BASE_PATH, 'seeds')
         }
     }
 };