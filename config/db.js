import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "127.0.0.1",      // o el host de tu servidor
  user: "root",           // tu usuario de phpMyAdmin
  password: "",           // tu password de phpMyAdmin
  database: "ToroBravoV2",  // tu base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;