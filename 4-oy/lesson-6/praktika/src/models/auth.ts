import { fetchData } from "../utils/postgres";

const LOGIN: string = `SELECT * FROM ADMIN WHERE username = $1 AND password = $2`;

const loginUser = (...params: any[]) => fetchData(LOGIN, params);

export { loginUser };
