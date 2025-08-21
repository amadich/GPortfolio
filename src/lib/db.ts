import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.NEXT_PUBLIC_DB_HOST,      // Your Hostinger MySQL hostname
  user: process.env.NEXT_PUBLIC_DB_USER,      // Database username
  password: process.env.NEXT_PUBLIC_DB_PASS,  // Database password
  database: process.env.NEXT_PUBLIC_DB_NAME,  // Database name
});
