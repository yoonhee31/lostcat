import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "lostcat",
  password: "dial6169^^",
});

export const db = pool.promise();
