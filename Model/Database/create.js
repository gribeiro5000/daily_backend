import mysql from "mysql2/promise";
import 'dotenv/config'

async function createDatabase() {
    //Open the connection to mysql server
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    })

    //create database statement
    await connection.execute(
        `CREATE DATABASE IF NOT EXISTS daily`
    )

    //close connection
    connection.end()
}

export default createDatabase