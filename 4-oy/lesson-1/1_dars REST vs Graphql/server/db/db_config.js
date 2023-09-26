const pg = require("pg")

const { Pool } = pg


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '1997',
  port: 5432,
})

module.exports =  pool