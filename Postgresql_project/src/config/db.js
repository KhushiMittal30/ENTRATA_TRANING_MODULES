import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();


//create pool of connections which is used when executing queries and everytime we need to connect to the database
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
});

// this is the connection pool that will be used to connect to the database
// it will be used in other parts of the application to execute queries


pool.on("connect",()=>{
    console.log("Connection pool established with database");
});

export default pool;    

// This file sets up the database connection pool using environment variables
// It exports the pool for use in other parts of the application



