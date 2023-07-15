import mysql from "mysql2";
import 'dotenv/config'

function createDatabase() {
    //Open the connection to mysql server
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    })

    //create database statement
    connection.query(
        `CREATE DATABASE IF NOT EXISTS daily`,
        function(err, result) {
            console.log(result);
            console.log(err)
        }
    )

    //close connection
    connection.end()
}

export default createDatabase