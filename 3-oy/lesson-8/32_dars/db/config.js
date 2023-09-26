const { Pool } = require("pg");


const client = new Pool({
    user:'postgres',
    database: 'test',
    port: 5432,
    password: "1997",
    host: 'localhost'
});

client.connect()






module.exports = client;