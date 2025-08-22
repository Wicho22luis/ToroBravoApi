import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost:3306",      // o el host de tu servidor
  user: "root",           // tu usuario de phpMyAdmin
  password: "",           // tu password de phpMyAdmin
  database: "nombre_bd",  // tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;