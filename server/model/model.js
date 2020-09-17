const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'elementos',
    port: '5432'
});


module.exports = pool;