import pkg from "pg";
const { Pool } = pkg;
import  connection from "../../conf/connection";


const pool = new Pool(connection);

const fetchData = async (sql: string, params: any[]) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(sql, params);
    return rows;
  } finally {
    client.release();
  }
};

export { fetchData };
